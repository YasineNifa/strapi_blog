module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'efb8135928cc38f35dd4c1a8ed2e1e02'),
  },
});
