angular.module("BB").run(["$templateCache", function($templateCache) {$templateCache.put("edit_booking_modal_form.html","<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" ng-click=\"cancel($event)\">&times;</button>\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form name=\"booking_form\" ng-submit=\"submit(modal_form)\">\n  <div class=\"member_booking_form_content modal-body\" bb-modal>\n    <p>{{form_model.full_describe}}</p>\n    <p>{{form_model.describe}}</p>\n    <div sf-schema=\"schema\" sf-form=\"form\" sf-model=\"form_model\" sf-options=\"{formDefaults: {feedback: false}}\">\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\">\n    <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Cancel</button>\n  </div>\n</form>\n");
$templateCache.put("login.html","<form name=\"login_form\" ng-submit=\"submit()\" class=\"form-horizontal\"\n  role=\"form\">\n  <div class=\"alert alert-danger\" role=\"alert\" ng-if=\"alert && alert.length > 0\">{{alert}}</div>\n  <div ng-class=\"{\'form-group\': true, \'has-error\': emailIsInvalid()}\">\n    <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n    <div class=\"col-sm-10\">\n      <input type=\"email\" ng-model=\"email\" name=\"email\" class=\"form-control\"\n        id=\"email\" placeholder=\"Email\" required autofocus>\n    </div>\n  </div>\n  <div ng-class=\"{\'form-group\': true, \'has-error\': passwordIsInvalid()}\">\n    <label for=\"password\" class=\"col-sm-2 control-label\">Password</label>\n    <div class=\"col-sm-10\">\n      <input type=\"password\" ng-model=\"password\" name=\"password\"\n        class=\"form-control\" id=\"password\" placeholder=\"Password\" required>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-primary\">Log In</button>\n    </div>\n  </div>\n</form>\n");
$templateCache.put("login_modal_form.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form name=\"login_form\" ng-submit=\"submit(login_form)\">\n  <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n    sf-model=\"login_form\">\n  </div>\n  <div class=\"modal-footer\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"OK\">\n    <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Dismiss</button>\n  </div>\n</form>\n");
$templateCache.put("member_booking_delete_modal.html","<div class=\"modal-header\">\n  <h1 class=\"modal-title\">Cancel Booking</h1>\n</div>\n\n<div class=\"modal-body\">\n\n  <ul class=\"confirmation-summary\">\n    <li class=\"row confirmation-summary-item\">\n      <div class=\"col-xs-3\">Booking</div>\n      <div class=\"col-xs-9\">{{booking.full_describe}}</div>\n    </li>\n    <li class=\"row confirmation-summary-item\">\n      <div class=\"col-xs-3\">When</div>\n      <div class=\"col-xs-9\">{{booking.datetime | datetime: \"h:mma dddd Do MMMM\"}}</div>\n    </li>\n  </ul>\n\n</div>\n<div class=\"modal-footer\">\n  <button class=\"btn btn-primary\" ng-click=\"confirm_delete()\"><span>Cancel Booking</span></button>\n  <button class=\"btn btn-link\" ng-click=\"cancel()\">Do not cancel</button>\n</div>\n");
$templateCache.put("member_bookings_table.html","<div ng-show=\"loading\"><img src=\'/BB_wait.gif\' class=\"loader\"></div>\n<table tr-ng-grid=\"\" items=\"bookings\" enable-filtering=\"false\"\n  ng-hide=\"loading\" fields=\"fields\" order-by=\"orderBy\">\n  <thead>\n    <tr>\n      <th field-name=\"date_order\" display-name=\"Date/Time\"></th>\n      <th field-name=\"details\" display-name=\"Description\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td field-name=\"date_order\"><span>{{gridItem.datetime | datetime: \'ddd DD MMM YY h.mma\'}}</span></td>\n      <td field-name=\"details\"><span>{{gridItem.details}}</span></td>\n      <td>\n        <button class=\"btn btn-default btn-sm\"\n          ng-hide=\"gridItem.date < now\"\n          ng-click=\"cancel(gridItem.id)\">\n            Cancel\n        </button>\n        <button class=\"btn btn-default btn-sm\"\n          ng-hide=\"gridItem.date < now\"\n          ng-click=\"edit(gridItem.id)\">\n            Details\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n");
$templateCache.put("member_bookings_table_cancel_booking.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">Cancel Booking</h3>\n</div>\n<form ng-submit=\"ok()\">\n  <div class=\"modal-body\" style=\"min-height: 200px\">\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" ng-model=\"booking.notify\">\n        Email customer?\n      </label>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Cancel Booking\">\n    <button class=\"btn btn-default\" ng-click=\"close($event)\">Close</button>\n  </div>\n</form>\n");
$templateCache.put("member_bookings_tabs.html","<div class=\"bb-member-bookings\">\n   <div tabset class=\"bb-tabs\">\n    <div tab>\n      <div tab-heading>\n        Upcoming Bookings\n      </div>\n      <div id=\"member\">\n        <div bb-member-upcoming-bookings member=\"member\"></div>\n      </div>\n    </div>\n    <div tab>\n      <div tab-heading>\n        Past bookings\n      </div>\n      <div id=\"member\">\n        <div bb-member-past-bookings member=\"member\"></div>\n      </div>\n    </div>\n    <div tab>\n      <div tab-heading>\n        Purchases\n      </div>\n      <div id=\"member\">\n        <div bb-member-purchases member=\"member\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("member_past_bookings.html","<div ng-show=\"loading\"><img src=\'/BB_wait.gif\' class=\"loader\"></div>\n<div ng-hide=\"loading\" class=\"bb-past clearfix\">\n  <div>\n\n    <div ng-show=\"past_bookings.length == 0\">\n      <h3>You don\'t currently have any past bookings.</h3>\n    </div>\n\n    <div ng-repeat=\"booking in past_bookings | filter:{deleted: false} |\n      orderBy: \'datetime.unix()\' | startFrom: (pagination.current_page - 1) * pagination.page_size | limitTo: pagination.page_size\">\n      <div class=\"datetime col-sm-5\">\n        <div>{{booking.datetime | datetime:\'Do MMM YYYY HH:mm\'}}</div>\n      </div>\n      <div class=\"describe col-sm-5\">\n        <div class=\"detail\">{{booking.full_describe}}</div>\n      </div>\n    </div>\n\n    <pagination total-items=\"pagination.num_items\"\n      ng-model=\"pagination.current_page\" items-per-page=\"pagination.page_size\"\n      max-size=\"pagination.max_size\" boundary-links=\"true\" rotate=\"false\"\n      num-pages=\"pagination.num_pages\" ng-show=\"past_bookings && past_bookings.length > 10\"></pagination>\n\n  </div>\n</div>\n");
$templateCache.put("member_pre_paid_bookings.html","<div ng-show=\"loading\"><img src=\'/BB_wait.gif\' class=\"loader\"></div>\n<div ng-hide=\"loading\" class=\"bb-upcoming clearfix\">\n  <div class=\"bookings\">\n    <div ng-show=\"pre_paid_bookings.length == 0\">\n      <h3>You don\'t currently have any pre-paid bookings.</h3>\n    </div>\n    <ul class=\"bb-list bb-banded-list\">\n      <li ng-repeat=\"booking in pre_paid_bookings | startFrom: (pagination.current_page - 1) * pagination.page_size | limitTo: pagination.page_size\" class=\"bb-list-item\">\n        <div class=\"row\">\n          <div class=\"col-xs-4\"><strong>{{booking.name}}</strong></div>\n          <div class=\"col-xs-8\">{{booking.number_of_bookings_remaining}} of {{booking.number_of_bookings}} remaining | Book By {{booking.book_by | datetime}} | Use from {{booking.use_from | datetime}} | Use by {{booking.use_by | datetime}}</div>\n        </div>\n      </li>\n    </ul>\n\n    <pagination total-items=\"pagination.num_items\"\n      ng-model=\"pagination.current_page\" items-per-page=\"pagination.page_size\"\n      max-size=\"pagination.max_size\" boundary-links=\"true\" rotate=\"false\"\n      num-pages=\"pagination.num_pages\" ng-show=\"pre_paid_bookings && pre_paid_bookings.length > 10\"></pagination>\n\n  </div>\n</div>\n");
$templateCache.put("member_purchases.html","<div>\n  <div class=\"bb-head\">\n    <span id=\"your_bookings\">Your Purchases</span>\n  </div>\n  <div id=\"bookings\">\n    <div ng-if=\"purchases.length == 0\">\n      <h3>You don\'t currently have any purchases.</h3>\n    </div>\n\n    <div class=\"row headers  hidden-xs\">\n\n      <div class=\"col-sm-2\">\n        Purchase Ref\n      </div>\n\n      <div class=\"col-sm-8\">\n        Date\n      </div>\n\n    </div>\n\n    \n    <div ng-repeat=\"purchase in purchases | startFrom: (pagination.current_page - 1) * pagination.page_size | limitTo: pagination.page_size\">\n      <div>\n        {{purchase.id}}\n      </div>\n      <div>\n        {{purchase.created_at | datetime}}\n      </div>\n      <div bb-member-purchase-items purchase=\"purchase\">\n        <div ng-repeat=\"item in items\">\n          {{item.full_describe}}\n        </div>\n      </div>\n    </div>\n\n    <pagination total-items=\"pagination.num_items\"\n      ng-model=\"pagination.current_page\" items-per-page=\"pagination.page_size\"\n      max-size=\"pagination.max_size\" boundary-links=\"true\" rotate=\"false\"\n      num-pages=\"pagination.num_pages\" ng-show=\"purchases && purchases.length > 10\"></pagination>\n    \n  </div>\n</div>");
$templateCache.put("member_upcoming_bookings.html","<div ng-show=\"loading\"><img src=\'/BB_wait.gif\' class=\"loader\"></div>\n<div ng-hide=\"loading\" class=\"bb-upcoming clearfix\">\n  <div id=\"bookings\">\n    <div ng-show=\"upcoming_bookings.length == 0\">\n      <h3>You don\'t currently have any upcoming bookings.</h3>\n    </div>\n    <div ng-repeat=\"booking in upcoming_bookings | filter:{deleted: false} | orderBy: \'datetime.unix()\' | startFrom: (pagination.current_page - 1) * pagination.page_size | limitTo: pagination.page_size\" class=\"booking-row\">\n      <div class=\"datetime\">\n        <div>{{booking.datetime | datetime: \'Do MMM YYYY h.mma\'}}</div>\n      </div>\n      <div class=\"describe\">\n        <div class=\"detail\">{{booking.full_describe}}</div>\n      </div>\n      <div class=\"bb-bookings-action\">\n        <button ng-click=\"cancel(booking)\" class=\"btn btn-danger bb-push\">Cancel</button>\n        <button ng-click=\"edit(booking)\" class=\"btn bb-push\">Details</button>\n      </div>\n    </div>\n\n    <pagination total-items=\"pagination.num_items\"\n      ng-model=\"pagination.current_page\" items-per-page=\"pagination.page_size\"\n      max-size=\"pagination.max_size\" boundary-links=\"true\" rotate=\"false\"\n      num-pages=\"pagination.num_pages\" ng-show=\"upcoming_bookings && upcoming_bookings.length > 10\"></pagination>\n\n\n  </div>\n</div>\n");
$templateCache.put("pick_company.html","<form name=\"pick_company_form\" ng-submit=\"selectedCompany()\" role=\"form\">\n  <p>Pick Company</p>\n  <div ng-repeat=\"admin in administrators\" class=\"radio\">\n    <label>\n      <input id=\"company{{admin.company_id}}\" type=\"radio\"\n        ng-model=\"$parent.selected_admin\" ng-value=\"admin\" required\n        name=\"company\">\n      {{admin.company_name}}\n    </label>\n  </div>\n  <input type=\"submit\" class=\"btn btn-default\">\n</form>\n");
$templateCache.put("pick_company_modal_form.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form name=\"pick_company_form\" ng-submit=\"submit(pick_company_form)\">\n  <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n    sf-model=\"pick_company_form\">\n  </div>\n  <div class=\"modal-footer\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"OK\">\n    <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Dismiss</button>\n  </div>\n</form>\n");
$templateCache.put("wallet.html","<div>\n\n  <div class=\"wallet-balance\">\n    <div ng-show=\"wallet.amount == 0\">\n      <span>Balance: </span><span>You dont have any credit in your wallet.</span>\n    </div>\n    <div ng-show=\"wallet.amount > 0\">\n      <span>Balance: </span> <span id=\"balance\"> {{wallet.amount | currency}} </span>\n    </div>\n  </div>\n\n  <div class=\"wallet-status\">\n    <div ng-hide=\"wallet.active\">\n      <span>Status:</span><span><b> Your wallet is not active.</b></span> <span><button ng-click=\"activateWallet(member)\"> Activate </button></span>\n    </div>\n    <div ng-show=\"wallet.active\">\n      <span>Status:</span><span id=\"status\"><b> Active </b></span>\n    </div>\n  </div>\n\n\n  <div>\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"(show_topup_box = true);(show_wallet_logs = false);\">Top Up</button>\n  </div>\n\n  <br>\n\n  <div ng-show=\"wallet.$has(\'logs\')\">\n     <div ng-show=\"show_wallet_logs\">\n      <div bb-wallet-logs></div>\n    </div>\n  </div>\n\n  <div ng-if=\"show_topup_box && !show_wallet_logs\" bb-wallet-payment>\n\n    <div class=\"bb-content\">\n\n      <div ng-form class=\"form-inline\">\n        <div class=\"form-group\">\n          <label for=\"amount\">Amount:</label>\n          <div class=\"input-group\">\n            <input type=\"number\" class=\"form-control input-sm\" id=\"amount\" name=\"amount\" ng-model=\"amount\" placeholder=\"Enter Top Up Amount\" bb-currency-field>\n            <span class=\"input-group-btn\">\n              <button type=\"submit\" class=\"btn btn-primary btn-sm\" ng-disabled=\"!amount || (amount < wallet.min_amount)\" ng-click=\"updateWallet(member, amount)\">Top Up Wallet</button>\n            </span>\n          </div>\n          <br>\n          <small> Minimum top up amount must be greater than {{wallet.min_amount | icurrency }} </small>\n        </div>\n      </div>\n\n      <div bb-wallet-purchase-bands></div>\n\n      <div ng-show=\"show_payment_iframe\" class=\"bb-payment\">\n        <div class=\"bb-head\">\n          <h3>Make Payment</h3>\n          <p>Topup wallet by {{amount | currency}}</p>\n        </div>\n\n        <iframe id=\"bb-payment\" ng-src=\"{{wallet_payment_url}}\" width=\"100%\" scrolling=\"no\" frameborder=\"0\"></iframe>\n        <script type=\"text/javascript\">\n          iFrameResize({log:false, checkOrigin:false, enablePublicMethods:true}, \'#bb-payment\');\n        </script>\n\n      </div>\n\n    </div>\n  </div>\n\n</div>");
$templateCache.put("wallet_logs.html","<div>\n  <h4>Wallet Transaction History</h4>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Action</th>\n        <th>Amount</th>\n        <th>Balance</th>\n        <th>Changed By</th>\n        <th>Date and Time</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr ng-repeat=\"log in logs | startFrom: (pagination.current_page - 1) * pagination.page_size | limitTo: pagination.page_size\" ng-class=\"{\'last-item\': $last}\">\n        <td>\n          {{log.action}}\n        </td>\n        <td class=\"text-right\">\n          {{log.payment_amount | currency}}\n        </td>\n        <td class=\"text-right\">\n          {{log.new_wallet_amount | currency}}\n        </td>\n        <td class=\"text-center\">\n          {{log.who_made_the_change}}\n        </td>\n        <td class=\"text-center\">\n          {{log.created_at | datetime: \"DD/MM/YYYY HH:mm\"}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <pagination total-items=\"pagination.num_items\"\n    ng-model=\"pagination.current_page\" items-per-page=\"pagination.page_size\"\n    max-size=\"pagination.max_size\" boundary-links=\"true\" rotate=\"false\"\n    num-pages=\"pagination.num_pages\" ng-show=\"logs && logs.length > 10\"></pagination>\n  \n</div>\n");
$templateCache.put("wallet_purchase_bands.html","<div>\n  <h4>Wallet Purchase Bands</h4>\n  <table class=\"table table-bordered\">\n    <thead>\n    </thead>\n    <tbody>\n      <tr ng-repeat=\"band in bands\">\n        <td class=\"text-left\">\n          {{band.wallet_amount | icurrency}} for {{band.actual_amount | icurrency}}\n        </td>\n        <td class=\"text-center\">\n          <button ng-click=\"purchaseBand(band)\">Buy</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>");}]);