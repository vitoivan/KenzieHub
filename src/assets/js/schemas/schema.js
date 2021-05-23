import * as Yup from 'yup';

const RegexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?#&]{8,}$/;

const LoginSchema = Yup.object().shape({
  
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
});
const RegisterSchema = Yup.object().shape({
  
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().matches(RegexPassword, 'Invalid password').required('Password is required'),
  course_module: Yup.number().required('Quarter is required'),
  name: Yup.string().required('Name is required'),
  contact: Yup.string().required('Contact is required'),
  bio: Yup.string().required('Bio is required')
});
const addJobSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});
const addTechSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

const SettingsWithoutPasswordSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  bio: Yup.string(),
  contact: Yup.string(),
  course_module: Yup.number()
});
const SettingsSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  bio: Yup.string(),
  password: Yup.string().matches(RegexPassword, 'Invalid password'),
  old_password: Yup.string(),
  contact: Yup.string(),
  course_module: Yup.number()
  
});

export {
  LoginSchema,
  RegisterSchema,
  addJobSchema,
  addTechSchema,
  SettingsWithoutPasswordSchema,
  SettingsSchema
}