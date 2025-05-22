const cds = require('@sap/cds');

console.log('✅ Custom handler for RiskManagementService loaded');

module.exports = cds.service.impl(async function () {
  const { A_BusinessPartner } = this.entities;
  const externalService = await cds.connect.to('BusinessPartnerA2X');

  this.on('READ', A_BusinessPartner, async (req) => {
    return externalService.run(req.query);
  });
});
