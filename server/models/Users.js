const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },

  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  city: {
    type: String,
    required: true,
  },

  state:{
    type: String,
    required: true,
    maxlength: 2,
  },

  zip: {
    type: Number,
    required: true,
    minlength:5,
    maxlength:5,
  },
  
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Items',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    // this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Users = model('users', userSchema);

module.exports = Users;