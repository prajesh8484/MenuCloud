const mongoose = require('mongoose');

const menuItemSchema = mongoose.Schema(
  {
    menu: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Menu',
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
    isUnavailable: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;