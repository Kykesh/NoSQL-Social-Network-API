const User = require('../models/User');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('thoughts friends');
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get a single user by id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('thoughts friends');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update a user by id
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete a user and their thoughts
exports.deleteUser = async (req, res) => {
  try {
    // First, find the user to get their thoughts
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // If the user has thoughts, delete them
    if (user.thoughts.length > 0) {
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
    }

    // Then, delete the user
    await user.remove();
    res.json({ message: 'User and their thoughts successfully deleted' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Add a friend
exports.addFriend = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Remove a friend
exports.removeFriend = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
