angular.module("BB").run(["$templateCache", function($templateCache) {$templateCache.put("_member_booking.html","<div class=\"row\">\n\n  <div class=\"col-sm-9\">\n\n    <h4>\n      <span ng-hide=\"booking.$link(\'event_chain\')\">{{booking.service_name}}</span>\n      <span ng-show=\"booking.$link(\'event_chain\')\">{{booking.$link(\'event_chain\').title}}</span>\n    </h4>\n\n    <ul class=\"bb-list bb-list-horizontal\">\n      <li>\n        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n        {{booking.datetime | datetime: \'L\'}}\n      </li>\n      <li>\n        <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n        {{booking.datetime | datetime: \'LT\'}} - {{booking.end_datetime | datetime: \'LT\'}}\n      </li>\n      <li>\n        <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n        {{booking.getCompany().name}}\n      </li>\n      <!-- <li>\n        <span class=\"bb-btn bb-btn-link\" ng-hide=\"booking.show_more\" ng-click=\"booking.show_more = true\">\n          More\n          <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\n        </span>\n        <span class=\"bb-btn bb-btn-link\" ng-show=\"booking.show_more\" ng-click=\"booking.show_more = false\">\n          Less\n          <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>\n        </span>\n      </li> -->\n    </ul>\n\n    <div>\n      <!-- location, address, google map, payment details, booking id -->\n    </div>\n\n  </div>\n\n  <div class=\"col-sm-3\">\n\n    <button\n      type=\"button\"\n      ng-click=\"actions[0].action(booking)\"\n      class=\"btn btn-default pull-right\"\n      ng-disabled=\"actions[0].disabled\"\n      ng-show=\"actions.length == 1\">\n      {{actions[0].label}}\n    </button>\n\n    <div\n      class=\"btn-group pull-right\"\n      uib-dropdown\n      ng-show=\"actions.length > 1\">\n      <button\n        type=\"button\"\n        ng-click=\"actions[0].action(booking)\"\n        class=\"btn btn-default\"\n        ng-disabled=\"actions[0].disabled\">\n        {{actions[0].label}}\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-default dropdown-toggle\"\n        uib-dropdown-toggle>\n        <span class=\"caret\"></span>\n        <span\n          class=\"sr-only\"\n          translate=\"MEMBER.BOOKING.TOGGLE_DROPDOWN_BTN\">\n        </span>\n      </button>\n      <ul\n        class=\"dropdown-menu\"\n        uib-dropdown-menu role=\"menu\">\n        <li\n          ng-click=\"action.action(booking)\"\n          ng-disabled=\"action.disabled\"\n          ng-repeat=\"action in actions | startFrom: 1\">\n          <a href>{{action.label}}</a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n</div>");
$templateCache.put("booking_payment_modal.html","<div class=\"modal-header\">\n  <button\n    type=\"button\"\n    class=\"close\"\n    ng-click=\"cancel()\">\n    &times;\n  </button>\n  <h1 class=\"modal-title\">{{booking.full_describe}}</h1>\n</div>\n\n<div class=\"modal-body\">\n\n  <p translate=\"MEMBER.MODAL.BOOKING_PAYMENT.DESCRIPTION\"></p>\n\n  <ul class=\"bb-list bb-list-horizontal bb-block bb-block-sm bb-bordered\">\n    <li>\n      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n      {{booking.datetime | datetime: \'L\'}}\n    </li>\n    <li>\n      <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n      <span\n        translate=\"MEMBER.MODAL.BOOKING_PAYMENT.TIME_RANGE\"\n        translate-values=\"{start: (booking.datetime | datetime: \'LT\'), end: (booking.end_datetime | datetime: \'LT\')}\">\n      </span>\n    </li>\n    <li>\n      {{booking.price | pretty_price}}\n    </li>\n    <!-- <li>\n      <span class=\"bb-btn bb-btn-link\">\n        More\n        <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"bb-btn bb-btn-link\">\n        Less\n        <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>\n      </span>\n    </li> -->\n\n  </ul>\n\n    <div\n      bb-payment-button\n      class=\"btn btn-primary\"\n      total=\"total\"\n      bb=\"bb\"\n      decide-next-page=\"decideNextPage\"\n      value=\"MEMBER.MODAL.BOOKING_PAYMENT.PAY_BTN\">\n    </div>\n\n</div>\n<div class=\"modal-footer\">\n<!--   <button class=\"btn btn-primary\" ng-click=\"confirm_delete()\"><span>Cancel Booking</span></button>\n  <button class=\"btn btn-link\" ng-click=\"cancel()\">Do not cancel</button> -->\n</div>\n");
$templateCache.put("edit_booking_modal_form.html","<div class=\"modal-header\">\n  <button\n    type=\"button\"\n    class=\"close\"\n    ng-click=\"cancel($event)\">\n    &times;\n  </button>\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form\n  name=\"booking_form\"\n  ng-submit=\"submit(modal_form)\">\n  <div\n    class=\"member_booking_form_content modal-body\"\n    bb-modal>\n    <p>{{form_model.full_describe}}</p>\n    <p>{{form_model.describe}}</p>\n    <div\n      sf-schema=\"schema\"\n      sf-form=\"form\"\n      sf-model=\"form_model\"\n      sf-options=\"{formDefaults: {feedback: false}}\">\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button\n      type=\"submit\"\n      class=\"btn btn-primary\"\n      translate=\"MEMBER.MODAL.EDIT_BOOKING.SAVE_BTN\">\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-default\"\n      ng-click=\"cancel($event)\"\n      translate=\"MEMBER.MODAL.EDIT_BOOKING.CANCEL_BTN\">\n    </button>\n  </div>\n</form>\n");
$templateCache.put("login.html","<form\n  name=\"login_form\"\n  ng-submit=\"submit()\"\n  class=\"form-horizontal\"\n  role=\"form\">\n  <div\n    class=\"alert alert-danger\"\n    role=\"alert\"\n    ng-if=\"alert && alert.length > 0\">\n    {{alert}}\n  </div>\n  <div ng-class=\"{\'form-group\': true, \'has-error\': emailIsInvalid()}\">\n    <label\n      for=\"email\"\n      class=\"col-sm-2 control-label\"\n      translate=\"MEMBER.LOGIN.EMAIL_LBL\"> \n    </label>\n    <div class=\"col-sm-10\">\n      <input\n        type=\"email\"\n        ng-model=\"email\"\n        name=\"email\"\n        class=\"form-control\"\n        id=\"email\"\n        required\n        autofocus\n        autocomplete=\"email\"\n        translate-attr=\"{placeholder: \'MEMBER.LOGIN.EMAIL_PLACEHOLDER\'}\"\n      />\n    </div>\n  </div>\n  <div ng-class=\"{\'form-group\': true, \'has-error\': passwordIsInvalid()}\">\n    <label\n      for=\"password\"\n      class=\"col-sm-2 control-label\"\n      translate=\"MEMBER.LOGIN.PASSWORD_LBL\">\n    </label>\n    <div class=\"col-sm-10\">\n      <input\n        type=\"password\"\n        ng-model=\"password\"\n        name=\"password\"\n        class=\"form-control\"\n        id=\"password\"\n        required\n        translate-attr=\"{placeholder: \'MEMBER.LOGIN.PASSWORD_PLACEHOLDER\'}\"\n      />\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button\n        type=\"submit\"\n        class=\"btn btn-primary\"\n        translate=\"MEMBER.LOGIN.LOGIN_BTN\">\n      </button>\n    </div>\n  </div>\n</form>\n");
$templateCache.put("login_modal_form.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form\n  name=\"login_form\"\n  ng-submit=\"submit(login_form)\">\n  <div\n    class=\"modal-body\"\n    sf-schema=\"schema\"\n    sf-form=\"form\"\n    sf-model=\"login_form\">\n  </div>\n  <div class=\"modal-footer\">\n    <button\n      type=\"submit\"\n      class=\"btn btn-primary\"\n      translate=\"MEMBER.MODAL.LOGIN.OK_BTN\">\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-default\"\n      ng-click=\"cancel($event)\"\n      translate=\"MEMBER.MODAL.LOGIN.CANCEL_BTN\">\n    </button>\n  </div>\n</form>\n");
$templateCache.put("member_booking_delete_modal.html","<div class=\"modal-header\">\n  <h1\n    class=\"modal-title\"\n    translate=\"MEMBER.MODAL.DELETE_BOOKING.TITLE\">\n  </h1>\n</div>\n\n<div class=\"modal-body\">\n\n  <ul class=\"confirmation-summary\">\n    <li class=\"row confirmation-summary-item\">\n      <div\n        class=\"col-xs-3\"\n        translate=\"MEMBER.MODAL.DELETE_BOOKING.DESCRIPTION_LBL\">\n      </div>\n      <div class=\"col-xs-9\">{{booking.full_describe}}</div>\n    </li>\n    <li class=\"row confirmation-summary-item\">\n      <div\n        class=\"col-xs-3\"\n        translate=\"MEMBER.MODAL.DELETE_BOOKING.WHEN_LBL\">\n      </div>\n      <div class=\"col-xs-9\">{{booking.datetime | datetime: \'LLLL\'}}</div>\n    </li>\n  </ul>\n\n</div>\n<div class=\"modal-footer\">\n  <button\n    type=\"button\"\n    class=\"btn btn-primary\"\n    ng-click=\"confirm_delete()\"\n    translate=\"MEMBER.MODAL.DELETE_BOOKING.CANCEL_BOOKING_BTN\">\n  </button>\n  <button\n    type=\"button\"\n    class=\"btn btn-link\"\n    ng-click=\"cancel()\"\n    translate=\"MEMBER.MODAL.DELETE_BOOKING.CANCEL_BTN\">\n  </button>\n</div>\n");
$templateCache.put("member_bookings_table.html","<table\n  tr-ng-grid=\"\"\n  items=\"bookings\"\n  enable-filtering=\"false\"\n  ng-hide=\"loading\"\n  fields=\"fields\"\n  order-by=\"orderBy\">\n  <thead>\n    <tr role=\"row\">\n      <th\n        field-name=\"date_order\"\n        display-name=\"Date/Time\">\n      </th>\n      <th\n        field-name=\"details\"\n        display-name=\"Description\">\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr role=\"row\">\n      <td field-name=\"date_order\">\n        <span>{{gridItem.datetime | datetime: \'ddd DD MMM YY h.mma\'}}</span>\n      </td>\n      <td field-name=\"details\">\n        <span>{{gridItem.details}}</span>\n      </td>\n      <td>\n        <button\n          type=\"button\"\n          class=\"btn btn-default btn-sm\"\n          ng-hide=\"gridItem.datetime.format(\'X\') < now.format(\'X\')\"\n          ng-click=\"cancel(gridItem.id)\"\n          translate=\"MEMBER.MEMBER_BOOKINGS_TABLE.CANCEL_BTN\">\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-default btn-sm\"\n          ng-hide=\"gridItem.datetime.format(\'X\') < now.format(\'X\')\"\n          ng-click=\"edit(gridItem.id)\"\n          translate=\"MEMBER.MEMBER_BOOKINGS_TABLE.DETAILS_BTN\">\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n");
$templateCache.put("member_bookings_table_cancel_booking.html","<div class=\"modal-header\">\n  <h3\n    class=\"modal-title\"\n    translate=\"MEMBER.MODAL.BOOKINGS_TABLE_CANCEL_BOOKING.TITLE\">\n  </h3>\n</div>\n<form ng-submit=\"ok()\">\n  <div\n    class=\"modal-body\"\n    style=\"min-height: 200px\">\n    <div class=\"checkbox\">\n      <label>\n        <input\n          type=\"checkbox\"\n          ng-model=\"booking.notify\"\n        />\n        <span translate=\"MEMBER.MODAL.BOOKINGS_TABLE_CANCEL_BOOKING.EMAIL_CUSTOMER_CHECKBOX_LBL\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button\n      type=\"submit\"\n      class=\"btn btn-primary\"\n      translate=\"MEMBER.MODAL.BOOKINGS_TABLE_CANCEL_BOOKING.CANCEL_BOOKING_BTN\">\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-default\"\n      ng-click=\"close($event)\"\n      translate=\"MEMBER.MODAL.BOOKINGS_TABLE_CANCEL_BOOKING.CANCEL_BTN\"></button>\n  </div>\n</form>\n");
$templateCache.put("member_bookings_tabs.html","<div class=\"bb-member-bookings\">\n   <div\n    uib-tabset\n    class=\"bb-tabs\">\n    <div uib-tab>\n      <div\n        uib-tab-heading\n        translate=\"MEMBER.BOOKING_TABS.UPCOMING_BOOKINGS_TAB_HEADING\">\n      </div>\n      <div id=\"member\">\n        <div\n          bb-member-upcoming-bookings\n          not-loaded=\"notLoaded\"\n          set-loaded=\"setLoaded\"\n          member=\"member\">\n        </div>\n      </div>\n    </div>\n    <div uib-tab>\n      <div\n        uib-tab-heading\n        translate=\"MEMBER.BOOKING_TABS.PAST_BOOKINGS_TAB_HEADING\">\n      </div>\n      <div id=\"member\">\n        <div\n          bb-member-past-bookings\n          not-loaded=\"notLoaded\"\n          set-loaded=\"setLoaded\"\n          member=\"member\">\n        </div>\n      </div>\n    </div>\n    <div uib-tab>\n      <div\n        uib-tab-heading\n        translate=\"MEMBER.BOOKING_TABS.PURCHASES_TAB_HEADING\">\n      </div>\n      <div id=\"member\">\n        <div\n          bb-member-purchases\n          member=\"member\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("member_past_bookings.html","<div>\n\n  <div ng-show=\"past_bookings.length == 0\">\n    <h3 translate=\"MEMBER.MEMBER_PAST_BOOKINGS.NO_PAST_BOOKINGS\"></h3>\n  </div>\n\n  <div class=\"bb-section\">\n\n    <ul class=\"bb-list bb-list-bordered\">\n\n      <li\n        bb-member-booking=\"booking\"\n        ng-repeat=\"booking in past_bookings | filter:{deleted: false} | startFrom: (pagination.current_page - 1) * pagination.page_size | limitTo: pagination.page_size\">\n      </li>\n\n    </ul>\n\n  </div>\n\n  <div\n    uib-pagination\n    total-items=\"pagination.num_items\"\n    ng-model=\"pagination.current_page\"\n    items-per-page=\"pagination.page_size\"\n    max-size=\"pagination.max_size\"\n    boundary-links=\"true\"\n    rotate=\"false\"\n    num-pages=\"pagination.num_pages\"\n    ng-show=\"past_bookings && past_bookings.length > 10\"> \n  </div>\n\n</div>\n");
$templateCache.put("member_pre_paid_bookings.html","<div ng-show=\"loading\">\n  <img\n    src=\"/BB_wait.gif\"\n    class=\"loader\">\n</div>\n<div\n  ng-hide=\"loading\"\n  class=\"bb-upcoming clearfix\">\n  <div class=\"bookings\">\n    <div ng-show=\"pre_paid_bookings.length == 0\">\n      <h3 translate=\"MEMBER.PREPAID_BOOKINGS.NO_PREPAID_BOOKINGS\"></h3>\n    </div>\n\n    <ul class=\"bb-list bb-banded-list\">\n      <li\n        ng-repeat=\"booking in pre_paid_bookings | startFrom: (pagination.current_page - 1) * pagination.page_size | limitTo: pagination.page_size\"\n        class=\"bb-list-item\">\n        <div class=\"row\">\n          <div class=\"col-xs-4\">{{booking.service_name}}</div>\n          <div class=\"col-xs-8\">\n            <span\n              translate=\"MEMBER.PREPAID_BOOKINGS.REMAINING_BOOKINGS\"\n              translate-values=\"{remaining: booking.remaining, total: booking.num_bookings}\">\n            </span>\n            <span>|</span>\n            <span\n              translate=\"MEMBER.PREPAID_BOOKINGS.PREPAID_BOOKING_DATES\"\n              translate-values=\"{\n                book_by: (booking.book_by | datetime: \'L\'),\n                use_from: (booking.use_from | datetime: \'L\'),\n                use_by: (booking.use_by | datetime: \'L\')\n              }\">\n            </span>\n          </div>\n        </div>\n      </li>\n    </ul>\n\n    <div\n      uib-pagination\n      total-items=\"pagination.num_items\"\n      ng-model=\"pagination.current_page\"\n      items-per-page=\"pagination.page_size\"\n      max-size=\"pagination.max_size\"\n      boundary-links=\"true\"\n      rotate=\"false\"\n      num-pages=\"pagination.num_pages\"\n      ng-show=\"pre_paid_bookings && pre_paid_bookings.length > 10\">\n    </div>\n\n  </div>\n</div>\n");
$templateCache.put("member_purchases.html","<div class=\"bb-member-purchases\">\n\n  <div>\n    <span\n      id=\"your_bookings\"\n      translate=\"MEMBER.PURCHASES.YOUR_PURCHASES\">\n    </span>\n\n    <div ng-show=\"purchases && purchases.length == 0\">\n      <h3 translate=\"MEMBER.PURCHASES.NO_CURRENT_PURCHASES\"></h3>\n    </div>\n\n    <div\n      ng-show=\"purchases && purchases.length != 0\"\n      class=\"row bb-list-table-header\">\n\n      <div class=\"col-xs-1\">\n        #\n      </div>\n\n      <div class=\"col-xs-3\">\n        <span translate=\"MEMBER.PURCHASES.PURCHASE_DATE_COL_HEADING\"></span>\n      </div>\n\n      <div class=\"col-xs-offset-2 col-xs-2\">\n        <span translate=\"MEMBER.PURCHASES.ITEMS_COL_HEADING\"></span>\n      </div>\n\n      <div class=\"col-xs-2\">\n        <span translate=\"MEMBER.PURCHASES.TOTAL_PRICE_COL_HEADING\"></span>\n      </div>\n      <div class=\"col-xs-2\">\n      </div>\n\n    </div>\n\n    <ul class=\"bb-list bb-list-bordered\">\n\n      <li ng-repeat=\"purchase in purchases | startFrom: (pagination.current_page - 1) * pagination.page_size | limitTo: pagination.page_size\">\n\n        <div class=\"row\">\n\n          <div class=\"col-xs-1\">\n            {{purchase.id}}\n          </div>\n\n          <div class=\"col-xs-3\">\n            {{purchase.created_at | datetime:\'L\'}}\n          </div>\n\n          <div class=\"col-xs-offset-2 col-xs-2\">\n            {{purchase.purchase_items.length}}\n          </div>\n\n          <div class=\"col-xs-2\">\n            {{purchase.total_price | pretty_price}}\n          </div>\n\n          <div class=\"col-xs-2\">\n\n            <span\n              class=\"bb-btn bb-btn-link\"\n              ng-hide=\"purchase.show_more\"\n              ng-click=\"purchase.show_more = true\"\n              translate=\"MEMBER.PURCHASES.MORE_DETAIL_BTN\">\n              <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"bb-btn bb-btn-link\"\n              ng-show=\"purchase.show_more\"\n              ng-click=\"purchase.show_more = false\"\n              translate=\"MEMBER.PURCHASES.LESS_DETAIL_BTN\">\n              <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>\n            </span>\n\n          </div>\n\n        </div>\n\n        <ul\n          class=\"bb-list bb-list-sm margin-top-10\"\n          ng-show=\"purchase.show_more\">\n\n          <li ng-repeat=\"item in purchase.purchase_items\">\n\n            <div class=\"row\">\n\n              <div class=\"col-xs-8\">\n                {{item.full_describe}}\n              </div>\n\n              <div class=\"col-xs-2\">\n                {{item.price | pretty_price}}\n              </div>\n\n            </div>\n\n          </li>\n        </ul>\n\n      </li>\n    </ul>\n\n    <div\n      uib-pagination\n      total-items=\"pagination.num_items\"\n      ng-model=\"pagination.current_page\"\n      items-per-page=\"pagination.page_size\"\n      max-size=\"pagination.max_size\"\n      boundary-links=\"true\"\n      rotate=\"false\"\n      num-pages=\"pagination.num_pages\"\n      ng-show=\"purchases && purchases.length > 10\">\n    </div>\n\n  </div>\n</div>\n");
$templateCache.put("member_upcoming_bookings.html","<div>\n\n  <div ng-show=\"upcoming_bookings.length == 0\">\n    <h3 translate=\"MEMBER.MEMBER_UPCOMING_BOOKINGS.NO_UPCOMING_BOOKINGS\"></h3>\n  </div>\n\n  <div\n    class=\"bb-section\"\n    ng-show=\"waitlist_bookings.length > 0\">\n\n    <h3 translate=\"MEMBER.MEMBER_UPCOMING_BOOKINGS.ON_WAITLIST_HEADING\"></h3>\n\n    <ul class=\"bb-list bb-list-bordered\">\n\n      <li\n        bb-member-booking=\"booking\"\n        ng-repeat=\"booking in (waitlist_bookings = (upcoming_bookings | filter:{deleted: false, on_waitlist: true} | orderBy: \'datetime.unix()\'))\">\n      </li>\n\n    </ul>\n\n  </div>\n\n  <div\n    class=\"bb-section\"\n    ng-show=\"confirmed_bookings.length > 0\"\n    bb-scroll-to=\"page:changed\">\n\n    <h3 translate=\"MEMBER.MEMBER_UPCOMING_BOOKINGS.CONFIRMED_HEADING\"></h3>\n\n    <ul class=\"bb-list bb-list-bordered\">\n\n      <li\n        bb-member-booking=\"booking\"\n        ng-repeat=\"booking in (confirmed_bookings = (upcoming_bookings | filter:{deleted: false, on_waitlist: false} | orderBy: \'datetime.unix()\' | startFrom: (pagination.current_page - 1) * pagination.page_size | limitTo: pagination.page_size))\">\n      </li>\n\n    </ul>\n\n    <div\n      uib-pagination total-items=\"pagination.num_items\"\n      ng-model=\"pagination.current_page\"\n      items-per-page=\"pagination.page_size\"\n      max-size=\"pagination.max_size\"\n      boundary-links=\"true\"\n      rotate=\"false\"\n      num-pages=\"pagination.num_pages\"\n      ng-show=\"upcoming_bookings && upcoming_bookings.length > 10\">    \n    </div>\n\n  </div>\n\n</div>\n");
$templateCache.put("member_waitlist_payment.html","<div class=\"modal-header\">\n  <button\n    type=\"button\"\n    class=\"close\"\n    ng-click=\"cancel()\">\n    &times;\n  </button>\n  <h1 class=\"modal-title\">{{booking.full_describe}}</h1>\n</div>\n\n<div class=\"modal-body\">\n\n  <p translate=\"MEMBER.WAITLIST_PAYMENT.DESCRIPTION\"></p>\n\n  <ul class=\"bb-list bb-list-horizontal bb-block bb-block-sm\">\n    <li>\n      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n      {{booking.datetime | datetime: \'L\'}}\n    </li>\n    <li>\n      <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n      {{booking.datetime | datetime: \'LT\'}} - {{booking.end_datetime | datetime: \'LT\'}}\n    </li>\n    <!-- <li>\n      <span class=\"bb-btn bb-btn-link\">\n        More\n        <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"bb-btn bb-btn-link\">\n        Less\n        <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>\n      </span>\n    </li> -->\n\n  </ul>\n\n  <div\n    bb-payment-button\n    class=\"btn btn-primary\"\n    total=\"total\"\n    bb=\"bb\"\n    decide-next-page=\"handlePaymentSuccess\"\n    value=\"MEMBER.WAITLIST_PAYMENT.PAY_BTN\">\n  </div>\n\n</div>\n<div class=\"modal-footer\">\n</div>\n");
$templateCache.put("past-bookings.html","<h1\n  class=\"account-header\"\n  translate=\"MEMBER.PAST_BOOKINGS.HEADING\">\n</h1>\n<div\n  bb-member-past-bookings\n  member=\"client\"\n  not-loaded=\"notLoaded\"\n  set-loaded=\"setLoaded\">\n</div>\n");
$templateCache.put("pick_company.html","<form\n  name=\"pick_company_form\"\n  ng-submit=\"selectedCompany()\"\n  role=\"form\">\n  <p translate=\"MEMBER.PICK_COMPANY.DESCRIPTION\"></p>\n  <div\n    ng-repeat=\"admin in administrators\"\n    class=\"radio\">\n    <label>\n      <input\n        id=\"company{{admin.company_id}}\"\n        type=\"radio\"\n        ng-model=\"$parent.selected_admin\"\n        ng-value=\"admin\"\n        required\n        name=\"company\"\n      />\n      {{admin.company_name}}\n    </label>\n  </div>\n  <button\n    type=\"submit\"\n    class=\"btn btn-default\">\n  </button>\n</form>\n");
$templateCache.put("pick_company_modal_form.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form\n  name=\"pick_company_form\"\n  ng-submit=\"submit(pick_company_form)\">\n  <div\n    class=\"modal-body\"\n    sf-schema=\"schema\"\n    sf-form=\"form\"\n    sf-model=\"pick_company_form\">\n  </div>\n  <div class=\"modal-footer\">\n    <button\n      type=\"submit\"\n      class=\"btn btn-primary\"\n      translate=\"MEMBER.MODAL.PICK_COMPANY.OK_BTN\">\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-default\"\n      ng-click=\"cancel($event)\"\n      translate=\"MEMBER.MODAL.PICK_COMPANY.CANCEL_BTN\">\n    </button>\n  </div>\n</form>\n");
$templateCache.put("purchase-history.html","<h1\n  class=\"account-header\"\n  translate=\"MEMBER.PURCHASE_HISTORY.HEADING\">\n</h1>\n<div\n  bb-member-purchases\n  member=\"client\"\n  not-loaded=\"notLoaded\"\n  set-loaded=\"setLoaded\">\n</div> \n");
$templateCache.put("upcoming-bookings.html","<h1\n  class=\"account-header\"\n  translate=\"MEMBER.UPCOMING_BOOKINGS.HEADING\">\n</h1>\n<div\n  bb-member-upcoming-bookings\n  member=\"client\"\n  not-loaded=\"notLoaded\"\n  set-loaded=\"setLoaded\">\n</div>");
$templateCache.put("wallet.html","<div>\n\n  <div class=\"wallet-balance\">\n\n    <div>\n      <span translate=\"MEMBER.WALLET.BALANCE_LBL\"></span>\n      <span\n        ng-show=\"wallet.amount == 0\"\n        translate=\"MEMBER.WALLET.WALLET_NO_CREDIT\">\n      </span>\n      <span ng-show=\"wallet.amount > 0\">\n        {{wallet.amount | currency}}\n      </span>\n    </div>\n\n  </div>\n\n  <div class=\"wallet-status\">\n    <div ng-hide=\"wallet.active\">\n      <span translate=\"MEMBER.WALLET.STATUS_LBL\"></span>\n      <span>\n        <b translate=\"MEMBER.WALLET.STATUS_INACTIVE\"></b>\n      </span>\n      <span>\n        <button\n          type=\"button\"\n          ng-click=\"activateWallet(member)\"\n          translate=\"MEMBER.WALLET.ACTIVATE_BTN\">\n        </button>\n      </span>\n    </div>\n    <div ng-show=\"wallet.active\">\n      <span translate=\"MEMBER.WALLET.STATUS_LBL\"></span>\n      <span id=\"status\">\n        <b translate=\"MEMBER.WALLET.STATUS_ACTIVE\"></b>\n      </span>\n    </div>\n  </div>\n\n  <div>\n    <button\n      type=\"button\"\n      class=\"btn btn-primary\"\n      ng-click=\"(show_topup_box = true);(show_wallet_logs = false);\"\n      translate=\"MEMBER.WALLET.TOP_UP_BTN\">\n    </button>\n  </div>\n\n  <br>\n\n  <div ng-show=\"wallet.$has(\'logs\')\">\n     <div ng-show=\"show_wallet_logs\">\n      <div bb-wallet-logs></div>\n    </div>\n  </div>\n\n  <div\n    ng-if=\"show_topup_box && !show_wallet_logs\"\n    bb-wallet-payment>\n\n    <div class=\"bb-content\">\n\n      <div ng-form class=\"form-inline\">\n        <div class=\"form-group\">\n          <label for=\"amount\">\n            <span translate=\"MEMBER.WALLET.AMOUNT_LBL\"></span>:\n          </label>\n          <div class=\"input-group\">\n            <input\n              type=\"number\"\n              class=\"form-control input-sm\"\n              id=\"amount\"\n              name=\"amount\"\n              ng-model=\"amount\"\n              translate-attr=\"{placeholder: \'MEMBER.WALLET.TOPUP_AMOUNT_PLACEHOLDER\'}\"\n              bb-currency-field\n            />\n            <span class=\"input-group-btn\">\n              <button\n                type=\"submit\"\n                class=\"btn btn-primary btn-sm\"\n                ng-disabled=\"!amount || (amount < wallet.min_amount)\"\n                ng-click=\"updateWallet(member, amount)\"\n                translate=\"MEMBER.WALLET.TOP_UP_BTN\">\n              </button>\n            </span>\n          </div>\n          <br>\n          <small\n            translate=\"MEMBER.WALLET.MIN_TOP_UP\"\n            translate-values=\"{min_amount: wallet.min_amount}\">\n          </small>\n        </div>\n      </div>\n\n      <div bb-wallet-purchase-bands></div>\n\n      <div\n        ng-show=\"show_payment_iframe\"\n        class=\"bb-payment\">\n        <div class=\"bb-head\">\n          <h3 translate=\"MEMBER.WALLET.PAYMENT_IFRAME_HEADING\"></h3>\n          <p\n            translate=\"MEMBER.WALLET.TOP_UP_WALLET_BY\"\n            translate-values=\"{amount: amount}\"\n            >\n          </p>\n        </div>\n\n        <iframe\n          id=\"bb-payment\"\n          ng-src=\"{{wallet_payment_url}}\"\n          width=\"100%\"\n          scrolling=\"no\"\n          frameborder=\"0\"> \n        </iframe>\n        <script type=\"text/javascript\">\n          iFrameResize({log:false, checkOrigin:false, enablePublicMethods:true}, \'#bb-payment\');\n        </script>\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("wallet_logs.html","<div>\n  <h4 translate=\"MEMBER.WALLET_LOGS.HEADING\"></h4>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th translate=\"MEMBER.WALLET_LOGS.ACTION_COL_HEADING\"></th>\n        <th translate=\"MEMBER.WALLET_LOGS.AMOUNT_COL_HEADING\"></th>\n        <th translate=\"MEMBER.WALLET_LOGS.BALANCE_COL_HEADING\"></th>\n        <th translate=\"MEMBER.WALLET_LOGS.CHANGED_BY_COL_HEADING\"></th>\n        <th translate=\"MEMBER.WALLET_LOGS.DATE_TIME_COL_HEADING\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr\n        ng-repeat=\"log in logs | startFrom: (pagination.current_page - 1) * pagination.page_size | limitTo: pagination.page_size\"\n        ng-class=\"{\'last-item\': $last}\">\n        <td>\n          {{log.action}}\n        </td>\n        <td class=\"text-right\">\n          {{log.payment_amount | currency}}\n        </td>\n        <td class=\"text-right\">\n          {{log.new_wallet_amount | currency}}\n        </td>\n        <td class=\"text-center\">\n          {{log.who_made_the_change}}\n        </td>\n        <td class=\"text-center\">\n          {{log.created_at | datetime: \'L LT\'}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div\n    uib-pagination\n    total-items=\"pagination.num_items\"\n    ng-model=\"pagination.current_page\"\n    items-per-page=\"pagination.page_size\"\n    max-size=\"pagination.max_size\"\n    boundary-links=\"true\"\n    rotate=\"false\"\n    num-pages=\"pagination.num_pages\"\n    ng-show=\"logs && logs.length > 10\">\n  </div>\n\n</div>\n");
$templateCache.put("wallet_purchase_bands.html","<div>\n  <h4 translate=\"MEMBER.WALLET_PURCHASE_BANDS.HEADING\"></h4>\n  <table class=\"table table-bordered\">\n    <thead>\n    </thead>\n    <tbody>\n      <tr ng-repeat=\"band in bands\">\n        <td\n          class=\"text-left\"\n          translate=\"MEMBER.WALLET_PURCHASE_BANDS.$X_FOR_$Y\"\n          translate-values=\"{X: band.wallet_amount, Y: band.actual_amount}\">\n        </td>\n        <td class=\"text-center\">\n          <button\n            type=\"button\"\n            ng-click=\"purchaseBand(band)\"\n            translate=\"MEMBER.WALLET_PURCHASE_BANDS.BUY_BTN\">\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");}]);