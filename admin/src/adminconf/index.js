const AdminBroExpressjs = require("admin-bro-expressjs");
const bcrypt = require("bcrypt");

const AdminBro = require("admin-bro");
AdminBro.registerAdapter(require("admin-bro-mongoose"));
const { Admin } = require("../dbconf/admin.schema");
const { resources } = require("./resources");
const { establishDbConnection } = require("../dbconf/connection");
const { theme } = require("./theme");
exports.initAdminBro = async (app) => {
  const connection = await establishDbConnection((res) => console.log(res));

  const adminBro = new AdminBro({
    Database: [connection],
    resources,
    dashboard: {
      component: AdminBro.bundle("./dashboard"),
    },
    rootPath: "/admin",
    branding: {
      companyName: "Done Inc.",
      softwareBrothers: false,
      logo: false,
      theme,
    },
  });
  // const AdminRouter = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  //   authenticate: async (email, password) => {
  //     try {
  //       const admin = await Admin.findOne({ email });
  //       if (admin) {
  //         const matched = await bcrypt.compare(password, admin.hash);
  //         if (matched) {
  //           return admin;
  //         }
  //       }
  //       return false;
  //     } catch (e) {
  //       console.log(e);
  //       return false;
  //     }
  //   },
  //   cookiePassword: 'some-secret-password-used-to-secure-cookie',
  // });

  const AdminRouter = AdminBroExpressjs.buildRouter(adminBro);

  app.use(adminBro.options.rootPath, AdminRouter);
};
