const AdminBroExpressjs = require('admin-bro-expressjs');
const bcrypt = require('bcrypt');

const AdminBro = require('admin-bro');
AdminBro.registerAdapter(require('admin-bro-mongoose'));
const { Admin } = require('../dbconf/admin.schema');
const { resources } = require('./resources');
const adminBro = new AdminBro({
  resources,
  dashboard: {
    component: AdminBro.bundle('./dashboard'),
  },
  rootPath: '/admin',
  branding: {
    companyName: 'Done Inc.',
    softwareBrothers: false,
    logo: false,
  },
});

exports.AdminRouter = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    try {
      const admin = await Admin.findOne({ email });
      if (admin) {
        const matched = await bcrypt.compare(password, admin.hash);
        if (matched) {
          return admin;
        }
      }
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
});
// exports.AdminRouter = AdminBroExpressjs.buildRouter(adminBro);

exports.adminBro = adminBro;
