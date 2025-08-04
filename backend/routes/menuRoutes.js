const express = require('express');
const {
  createMenu,
  getAdminMenu,
  createMenuItem,
  getMenuItems,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
  getPublicMenu,
  getQrCode,
} = require('../controllers/menuController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, createMenu).get(protect, getAdminMenu);
router.route('/items').post(protect, createMenuItem).get(protect, getMenuItems);
router
  .route('/items/:id')
  .get(protect, getMenuItemById)
  .put(protect, updateMenuItem)
  .delete(protect, deleteMenuItem);

router.route('/:uniqueId').get(getPublicMenu);
router.route('/qr/:uniqueId').get(getQrCode);

module.exports = router;