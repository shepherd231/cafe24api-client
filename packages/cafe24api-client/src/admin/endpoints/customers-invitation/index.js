
export default (cls) => {
  cls.prototype.sendAnInvitationToActivateAccount = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/customers/${input['member_id']}/invitation`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
        invitation_type: input['invitation_type'],
      },
      options,
    );
  };

};
