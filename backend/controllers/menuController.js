const asyncHandler = require('express-async-handler');
const QRCode = require('qrcode');
const Menu = require('../models/Menu');
const MenuItem = require('../models/MenuItem');
const generateUniqueId = require('../utils/generateUniqueId');

// @desc    Create a menu for the logged-in admin
// @route   POST /api/menu
// @access  Private
const createMenu = asyncHandler(async (req, res) => {
  const { restaurantName } = req.body;
  
  const menuExists = await Menu.findOne({ admin: req.admin._id });

  if (menuExists) {
    res.status(400);
    throw new Error('Menu already exists for this admin');
  }

  const uniqueId = generateUniqueId();

  const menu = await Menu.create({
    admin: req.admin._id,
    restaurantName,
    uniqueId,
  });

  if (menu) {
    res.status(201).json({
      _id: menu._id,
      admin: menu.admin,
      restaurantName: menu.restaurantName,
      uniqueId: menu.uniqueId,
    });
  } else {
    res.status(400);
    throw new Error('Invalid menu data');
  }
});

// @desc    Get menu for logged-in admin
// @route   GET /api/menu
// @access  Private
const getAdminMenu = asyncHandler(async (req, res) => {
  const menu = await Menu.findOne({ admin: req.admin._id });

  if (menu) {
    res.json(menu);
  } else {
    res.status(404);
    throw new Error('Menu not found for this admin');
  }
});

// @desc    Create new menu item
// @route   POST /api/menu/items
// @access  Private
const createMenuItem = asyncHandler(async (req, res) => {
  const { name, description, price, category, image, tags } = req.body;

  const menu = await Menu.findOne({ admin: req.admin._id });

  if (!menu) {
    res.status(404);
    throw new Error('Menu not found for this admin. Create a menu first.');
  }

  const menuItem = new MenuItem({
    menu: menu._id,
    name,
    description,
    price,
    category,
    image,
    tags,
  });

  const createdMenuItem = await menuItem.save();
  res.status(201).json(createdMenuItem);
});

// @desc    Get all menu items for logged-in admin's menu
// @route   GET /api/menu/items
// @access  Private
const getMenuItems = asyncHandler(async (req, res) => {
  const menu = await Menu.findOne({ admin: req.admin._id });

  if (!menu) {
    res.status(404);
    throw new Error('Menu not found for this admin.');
  }

  const menuItems = await MenuItem.find({ menu: menu._id });
  res.json(menuItems);
});

// @desc    Get single menu item by ID
// @route   GET /api/menu/items/:id
// @access  Private
const getMenuItemById = asyncHandler(async (req, res) => {
  const menuItem = await MenuItem.findById(req.params.id);

  if (menuItem) {
    const menu = await Menu.findOne({ admin: req.admin._id });
    if (menu && menuItem.menu.toString() === menu._id.toString()) {
      res.json(menuItem);
    } else {
      res.status(401);
      throw new Error('Not authorized to view this menu item');
    }
  } else {
    res.status(404);
    throw new Error('Menu item not found');
  }
});

// @desc    Update a menu item
// @route   PUT /api/menu/items/:id
// @access  Private
const updateMenuItem = asyncHandler(async (req, res) => {
  const { name, description, price, category, image, tags, isUnavailable } = req.body;

  const menuItem = await MenuItem.findById(req.params.id);

  if (menuItem) {
    const menu = await Menu.findOne({ admin: req.admin._id });
    if (menu && menuItem.menu.toString() === menu._id.toString()) {
      menuItem.name = name || menuItem.name;
      menuItem.description = description || menuItem.description;
      menuItem.price = price || menuItem.price;
      menuItem.category = category || menuItem.category;
      menuItem.image = image || menuItem.image;
      menuItem.tags = tags || menuItem.tags;
      menuItem.isUnavailable = isUnavailable !== undefined ? isUnavailable : menuItem.isUnavailable;

      const updatedMenuItem = await menuItem.save();
      res.json(updatedMenuItem);
    } else {
      res.status(401);
      throw new Error('Not authorized to update this menu item');
    }
  } else {
    res.status(404);
    throw new Error('Menu item not found');
  }
});

// @desc    Delete a menu item
// @route   DELETE /api/menu/items/:id
// @access  Private
const deleteMenuItem = asyncHandler(async (req, res) => {
  const menuItem = await MenuItem.findById(req.params.id);

  if (menuItem) {
    const menu = await Menu.findOne({ admin: req.admin._id });
    if (menu && menuItem.menu.toString() === menu._id.toString()) {
      await menuItem.deleteOne();
      res.json({ message: 'Menu item removed' });
    } else {
      res.status(401);
      throw new Error('Not authorized to delete this menu item');
    }
  } else {
    res.status(404);
    throw new Error('Menu item not found');
  }
});

// @desc    Get public menu by uniqueId
// @route   GET /api/menu/:uniqueId
// @access  Public
const getPublicMenu = asyncHandler(async (req, res) => {
  const menu = await Menu.findOne({ uniqueId: req.params.uniqueId });

  if (menu) {
    const menuItems = await MenuItem.find({ menu: menu._id });
    res.json({ restaurantName: menu.restaurantName, menuItems });
  } else {
    res.status(404);
    throw new Error('Menu not found');
  }
});

// @desc    Generate QR code for the menu
// @route   GET /api/qr/:uniqueId
// @access  Public
const getQrCode = asyncHandler(async (req, res) => {
  const { uniqueId } = req.params;
  const menuUrl = `${req.protocol}://${req.get('host')}/menu/${uniqueId}`;

  try {
    const qrCodeImage = await QRCode.toDataURL(menuUrl);
    res.send(`<img src="${qrCodeImage}">`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating QR code');
  }
});

module.exports = {
  createMenu,
  getAdminMenu,
  createMenuItem,
  getMenuItems,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
  getPublicMenu,
  getQrCode,
};