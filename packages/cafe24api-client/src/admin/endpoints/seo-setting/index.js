export default (cls) => {
  cls.prototype.retrieveSEOSettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/seo/setting`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.updateStoreSEOSettings = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/seo/setting`,
      {
        shop_no: input['shop_no'],
        common_page_title: input['common_page_title'],
        common_page_meta_description: input['common_page_meta_description'],
        favicon: input['favicon'],
        use_google_search_console: input['use_google_search_console'],
        google_search_console: input['google_search_console'],
        use_naver_search_advisor: input['use_naver_search_advisor'],
        naver_search_advisor: input['naver_search_advisor'],
        sns_share_image: input['sns_share_image'],
        use_twitter_card: input['use_twitter_card'],
        robots_text: input['robots_text'],
        mobile_robots_text: input['mobile_robots_text'],
        use_missing_page_redirect: input['use_missing_page_redirect'],
        missing_page_redirect_url: input['missing_page_redirect_url'],
        mobile_use_missing_page_redirect:
          input['mobile_use_missing_page_redirect'],
        mobile_missing_page_redirect_url:
          input['mobile_missing_page_redirect_url'],
        use_sitemap_auto_update: input['use_sitemap_auto_update'],
        use_rss: input['use_rss'],
        display_group: input['display_group'],
        header_tag: input['header_tag'],
        footer_tag: input['footer_tag'],
        mobile_header_tag: input['mobile_header_tag'],
        mobile_footer_tag: input['mobile_footer_tag'],
      },
      options,
    );
  };
};
