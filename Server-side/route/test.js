
Customer
// registerUser()
// loginUser()

// getMyProfile()
// updateMyProfile()

// Customer
//    ↓
// GET /users/me
//    ↓
// requireAuth
//    ↓
// getMyProfile()
//    ↓
// getUserById()

employee

// getAllUsers()
// getUserById()

// Employee
//    ↓
// GET /users
//    ↓
// requireAuth
//    ↓
// requireRole('employee', 'admin')
//    ↓
// getAllUsers()
//    ↓
// userModel.getAllUsers()

Admin 

// getAllUsers()
// getUserById()
// updateUser()
// deleteUser()

// Admin
//    ↓
// PUT /users/:id
//    ↓
// requireAuth
//    ↓
// requireRole('admin')
//    ↓
// updateUser()
//    ↓
// userModel.updateUser()