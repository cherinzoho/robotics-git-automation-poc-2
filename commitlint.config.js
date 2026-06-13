module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Scope is mandatory on every commit
    'scope-empty': [2, 'never'],
    // Only these scopes are allowed — add new ones as subsystems are added
    'scope-enum': [2, 'always', [
      'arm',        // robotic arm
      'amr',        // autonomous mobile robot
      'humanoid',   // humanoid robot
      'sim',        // Gazebo simulation
      'nav',        // navigation stack
      'slam',       // SLAM and mapping
      'perception', // sensor processing
      'control',    // control systems
      'hw',         // hardware and firmware
      'sdk',        // SDK and interfaces
      'infra',      // server infrastructure
      'docs',       // documentation
      'ci',         // CI/CD pipeline files
      'repo',       // repository config files
    ]],
    // Subject max 72 characters
    'subject-max-length': [2, 'always', 72],
    // subject-case disabled — ROS2, SLAM, AMR, URDF acronyms conflict
    // with all built-in case rules. Convention enforced via code review.
    'subject-case': [0],
  },
};
