<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

$agent_id = isset($_POST['load_id']) ? sanitize_text_field($_POST['load_id']) : 0;
$nonce = isset($_POST['nonce']) ? sanitize_text_field($_POST['nonce']) : 0;

/**
 * Check nonce
 */
if( !wp_verify_nonce($nonce, $agent_id) ){
    die(__('Cheating huh?', 'wp-support-plus-responsive-ticket-system'));
}

global $wpsupportplus, $wpdb;

$agent_name = $wpdb->get_var("select display_name from {$wpdb->base_prefix}users where ID=".$agent_id);

?>

<form action="" onsubmit="return validate_wpsp_admin_popup_form(this);">
    
    <div id="wpsp_popup_form_error" class="error notice" style="display: none;">
        <p></p>
    </div>
    
    <div class="wpsp_popup_form_element">
        <?php _e('Are you sure to delete this agent?','wp-support-plus-responsive-ticket-system')?><br>
        <ul>
            <li><?php echo $agent_name?></li>
        </ul>
    </div>
    
    <?php do_action('wpsp_get_delete_agent', $agent_id);?>
    
    <input type="hidden" name="action" value="wpsp_set_delete_agent" />
    <input type="hidden" name="load_id" value="<?php echo $agent_id?>" />
    <input type="hidden" name="nonce" value="<?php echo wp_create_nonce($agent_id)?>" />
    
    <hr class="wpsp_admin_popup_footer_saperator">
    <button class="button button-primary" type="submit"><?php _e('Submit','wp-support-plus-responsive-ticket-system')?></button>
    <button class="button" type="button" onclick="wpsp_close_admin_popup();"><?php _e('Cancel','wp-support-plus-responsive-ticket-system')?></button>
    
</form>

<script>
function validate_wpsp_admin_popup_form(obj){
    
    var error_flag = false;
        
    <?php do_action('validate_wpsp_get_delete_category');?>
    
    if(!error_flag){
        wpsp_admin_submit_popup(obj);
    } else {
        wpspjq('#wpsp_popup_form_error').show();
    }
    
    return false;
}
</script>