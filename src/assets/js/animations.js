
/* Settings */ 
const SettingsAnimation = {
  in: {
    y: '-100vh',
  },
  to: {
    y: '0',
  },
  out: {
    x: '-100vw',
  },
}
const SettingsTransition = {
  y: { type: 'easeIn', duration: .5},
  x: { type: 'linear', duration: .5}
}


/* Home */ 
const HomeAnimation = {
  in: {
    y: '100vh',
  },
  to: {
    y: '0',
  },
  out: {
    y: '-100vh',
  },
}
const HomeTransition = {
  y: { type: 'easeIn', duration: .5},
  x: { type: 'linear', duration: .5}
}


/* Login */ 
const LoginAnimation = {
  in: {
    x: '-100vw',
  },
  to: {
    x: '0',
  },
  out: {
    y: '100vh',
  },
}
const LoginTransition = {
  y: { type: 'easeIn', duration: .5},
  x: { type: 'linear', duration: .5}
}


/* Profile */
const ProfileAnimation = {
  in: {
    x: '-100vw',
  },
  to: {
    x: '0',
  },
  out: {
    y: '-200vh',
  },
}
const ProfileTransition = {
  y: { type: 'easeIn', duration: .5},
  x: { type: 'linear', duration: .5}
}

/* Singup */
const SingupAnimation = {
  in: {
    x: '100vw',
  },
  to: {
    x: '0',
  },
  out: {
    x: '-100vw',
  },
}
const SingupTransition = {
  y: { type: 'easeIn', duration: .5},
  x: { type: 'linear', duration: .5}
}

export {
  SettingsAnimation,
  SettingsTransition,
  HomeAnimation,
  HomeTransition,
  LoginAnimation,
  LoginTransition,
  ProfileAnimation,
  ProfileTransition,
  SingupAnimation,
  SingupTransition
}