!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){r(1),r(2),e.exports=r(3)},function(e,t){jQuery(document).ready(function(){jQuery(".wlcms-next-step").on("click",function(){jQuery("#wlcms_tab_step-1").hide(),jQuery("#tab-step-1").hide(),jQuery("#wlcms_tab_step-2").show(),jQuery("#tab-step-2").show()}),jQuery(".wlcms-prev-step").on("click",function(){jQuery("#wlcms_tab_step-2").hide(),jQuery("#tab-step-2").hide(),jQuery("#wlcms_tab_step-1").show(),jQuery("#tab-step-1").show()}),jQuery("form.wlcms-form").areYouSure({message:"Changes that you made may not be saved"}),jQuery(".reset-confirm").click(function(){if(0==confirm("Are you sure you want to reset!"))return!1});var e=jQuery(".wlcms_wrapper .navigation"),t=e.offset();function r(e){var t=jQuery(".wlcms-form"),r=t.attr("action");-1!==r.indexOf("#")&&(hash=r.replace(/.*#/,"#"),r=r.replace(/#.*/,"")),t.attr({action:r+"#"+e})}jQuery(window).scroll(function(){var r=jQuery("#wpadminbar").height(),n=t.top-(e.height()+r);jQuery(this).scrollTop()>n?(e.addClass("fixed"),e.css({top:r}).width(jQuery(".wlcms_wrapper").width())):jQuery(this).scrollTop()<=t.top&&e.hasClass("fixed")&&e.removeClass("fixed")}),jQuery(".wlcms-navigation ul li a:not(.wlcms-ignore)").click(function(){var e=jQuery(this).attr("data-tab");jQuery(".wlcms-navigation ul li a").removeClass("current"),jQuery(".tab-content").removeClass("current"),jQuery(this).addClass("current"),jQuery(".wlcms_content section").removeClass("current"),jQuery(".wlcms_content section."+e).addClass("current"),r(e),jQuery("html, body").animate({scrollTop:0},400)});var n=window.location.hash;function i(){jQuery(".wlcms-remove-img").on("click",function(){var e=jQuery(this).parents(".wlcms-input-group");e.find(".wlcms-upload-thumbnail").html(""),e.find(".wlcms-upload-input").val("")})}""!=(n=n.replace("#",""))?(jQuery(".wlcms-navigation ul li a#wlcms_"+n).addClass("current"),jQuery(".wlcms_content section."+n).addClass("current"),r(n)):0==jQuery(".wlcms_content section.current").length&&(jQuery(".wlcms_content section").eq(0).addClass("current"),jQuery(".wlcms-navigation ul li").eq(0).find("a").addClass("current")),jQuery(".wlcms_upload").click(function(){var e=wp.media.editor.send.attachment,t=jQuery(this);return wp.media.editor.send.attachment=function(r,n){var a='<img id="'+n.id+'" src="'+n.url+'" />';a+='<span class="dashicons dashicons-dismiss wlcms-remove-img"></span>',t.parents(".wlcms-input-group").find(".wlcms-upload-thumbnail").html(a),t.parents(".wlcms-input-group").find(".wlcms-upload-input").val(n.url),i(),wp.media.editor.send.attachment=e},wp.media.editor.open(),!1}),i(),jQuery(".wlcms-color-field").wpColorPicker(),jQuery(".wlcms-preview-link").on("click",function(){jQuery("#wlcms-preview-content").html("...");var e=jQuery(".wlcms-form").serialize()+"&action=wlcms_save_login_preview_settings&_ajax_nonce="+wlcms_settings.wlcms_ajax_nonce;jQuery.ajax({type:"post",url:ajaxurl,data:e,success:function(e){jQuery("#wlcms-preview-content").html('<iframe allowtransparency="true" class="long-animate wlcms-preview-iframe" title="Login Preview" onmousewheel="" src="'+wlcms_settings.loginurl+'?wlcms-action=preview&preview_section=login&reauth=1"></iframe>'),jQuery("iframe.wlcms-preview-iframe").load(function(){var e=jQuery(this),t=e.contents();e.slideDown("slow"),t.find("body").prepend('<div style="text-align: center;position: absolute;top: 40px;margin: 0 30%;left: 0;font-weight: 300;font-size: 24px;background: #dad9d9cf;line-height: 35px;padding: 0;color: #790404;width: 40%;">Preview mode</div>'),t.find("form").attr("action","#"),t.find("#wp-submit").attr("type","button"),t.find("a").attr("href","#")})}})}),jQuery(".wlcms-dashboard-preview-link").on("click",function(){jQuery("#wlcms-dashboard-content").html("...");var e=jQuery(".wlcms-form").serialize()+"&action=wlcms_save_dashboard_preview_settings";jQuery.ajax({type:"post",url:ajaxurl,data:e,success:function(e){jQuery("#wlcms-preview-content").html('<iframe allowtransparency="true" class="long-animate wlcms-preview-iframe" title="Preview" onmousewheel="" src="'+wlcms_settings.adminurl+'?wlcms-action=preview&preview_section=dashboard"></iframe>'),jQuery("iframe.wlcms-preview-iframe").load(function(){var e=jQuery(this),t=e.contents();e.slideDown("slow"),t.find("body").prepend('<div style="text-align: center;position: absolute;top: 40px;margin: 0 30%;font-weight: 300;font-size: 24px;background: #dad9d9cf;line-height: 35px;padding: 0 20px;color: #790404;width: 40%;z-index:999999">Preview mode</div>'),t.find("a").each(function(){jQuery(this).attr("href","#")})})}})}),jQuery(".wlcms-select2").select2({width:"100%",placeholder:"Select"})}),jQuery.validator.addMethod("feedurl",function(e,t){return this.optional(t)||/^(?:(?:(?:https?|ftp|feed):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)},"Please use a valid URL"),jQuery.validator.messages.url="Please use a valid URL",jQuery(document).ready(function(){jQuery('.main-toggle[type="checkbox"]').change(function(e){var t=jQuery(this).prop("checked"),r=jQuery(this).attr("data-revised"),n=jQuery(this).parents(".toggle-group").find(".sub-fields");n.length&&(t&&"1"!=r&&n.find('input[type="checkbox"]:checked').length==n.find('input[type="checkbox"]').length||!t&&"1"==r?n.hide():n.show())}).trigger("change"),jQuery(".wlcms-toggle-arrow").on("click",function(){jQuery(this).toggleClass("active"),jQuery(this).next("ul").slideToggle()}),jQuery("#enable_wlcms_admin").on("change",function(){jQuery(this).is(":checked")?jQuery(".menu-admin-wrapper").show():jQuery(".menu-admin-wrapper").hide()}).trigger("change"),jQuery(".enable_welcome_for_all_roles").on("change",function(){var e=jQuery("#select_user_roles"+jQuery(this).data("section"));jQuery(this).is(":checked")?e.hide():e.show()}).trigger("change"),jQuery('.wlcms-toggle[type="checkbox"]').change(function(e){var t=jQuery(this).prop("checked"),r=jQuery(this).parent();r.siblings();r.find('input[type="checkbox"]').prop({checked:t}),function e(r){var n=r.parent().parent(),i=!0;if(r.siblings().each(function(){return i=jQuery(this).children('input[type="checkbox"]').prop("checked")===t}),i&&t)n.children('input[type="checkbox"]').prop({checked:t}),e(n);else if(i&&!t)n.children('input[type="checkbox"]').prop("checked",t),n.children('input[type="checkbox"]').prop("indeterminate",n.find('input[type="checkbox"]:checked').length>0),e(n);else{var a=!0;r.parents("li").children('input[type="checkbox"]').hasClass("main-toggle-reverse")&&(a=!1),r.parents("li").children('input[type="checkbox"]').prop({checked:a})}}(r)}),jQuery(".wlcms-menus-settings > ul > li").each(function(){jQuery(this).find('input[type="checkbox"]:checked').length==jQuery(this).find('input[type="checkbox"]').length?jQuery(this).find("ul.sub_menu_wrapper").hide():jQuery(this).find("ul.sub_menu_wrapper").show()});jQuery(".wlcms-form").validate({ignore:".ignore",rules:{rss_feed_address:{required:!1,feedurl:!0}},invalidHandler:function(e,t){var r=t.errorList;jQuery(".wlcms-navigation ul li span").remove();var n=[];for(i=0;i<r.length;i++){var a=r[i].element,s=jQuery(a).closest("section").attr("id");-1===n.indexOf(s)&&n.push(s),console.log(s)}for(i=0;i<n.length;i++)jQuery(".wlcms-navigation ul li a#wlcms_tab-"+n[i]).append('<span class="dashicons dashicons-no-alt"></span>');var c=t.numberOfInvalids();if(c){var o=1==c?"You missed 1 field. It has been highlighted":"You missed "+c+" fields. They have been highlighted";jQuery("div.wlcms_messages span").html(o),jQuery("div.wlcms_messages").show()}else jQuery("div.wlcms_messages").hide()}});jQuery(".template_type").on("change",function(){var e=jQuery(this).data("template_type"),t=jQuery(".template_type"+e).filter(":checked"),r=t.data("page_type");"html"==t.val()?(jQuery(".welcome-basicHtml"+e).show(),jQuery(".welcome-page"+e).hide()):(jQuery(".welcome-basicHtml"+e).hide(),jQuery(".welcome-page"+e).show(),"beaver"==r?(jQuery(".beaver_page"+e).next().show(),jQuery(".elementor_page"+e).next().hide()):(jQuery(".beaver_page"+e).next().hide(),jQuery(".elementor_page"+e).next().show()))}),jQuery(".template_type").trigger("change"),jQuery("form.wlcms-advert").on("submit",function(){var e=jQuery("#ad-authorize").is(":checked"),t=jQuery("#inf_custom_GDPR");t.val(e+" "+t.data("date"))})})},function(e,t){},function(e,t){}]);