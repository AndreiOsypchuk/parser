const { User } = require('../dbconf/user.schema');
const { Admin } = require('../dbconf/admin.schema');
const bcrypt = require('bcrypt');

exports.resources = [
  {
    resource: User,
    options: {
      properties: {
        hash: {
          isVisible: false,
        },
        password: {
          type: 'string',
          isVisible: {
            list: false,
            edit: true,
            filter: false,
            show: false,
          },
        },
      },
      actions: {
        new: {
          before: async (request) => {
            console.log(request.payload);
            if (request.payload.password) {
              request.payload = {
                ...request.payload,
                hash: await bcrypt.hash(request.payload.password, 10),
                password: undefined,
              };
            }
            return request;
          },
        },
      },
    },
  },
  {
    resource: Admin,
    options: {
      properties: {
        hash: {
          isVisible: false,
        },
        password: {
          type: 'string',
          isVisible: {
            list: false,
            edit: true,
            filter: false,
            show: false,
          },
        },
      },
      actions: {
        new: {
          before: async (request) => {
            console.log(request.payload);
            if (request.payload.password) {
              request.payload = {
                ...request.payload,
                hash: await bcrypt.hash(request.payload.password, 10),
                password: undefined,
              };
            }
            return request;
          },
        },
      },
    },
  },
];
