<?php
$atts = vc_map_get_attributes( $this->getShortcode(), $atts );
extract( $atts );

$heading_font = '';
if(stm_is_motorcycle()) {
	$heading_font = 'heading-font';
}
?>

<?php if(!empty($subtitle)): ?>
	<tr>
		<td>
			<span class="text-transform subtitle"><?php echo esc_html($subtitle); ?></span>
		</td>
		<td class="text-right">&nbsp;</td>
	</tr>
<?php else: ?>
	<?php if(!empty($name) and !empty($value)): ?>
		<tr>
			<td>
				<span class="text-transform <?php echo esc_attr($heading_font); ?>"><?php echo esc_html($name) ?></span>
			</td>
			<td class="text-right">
				<span class="h6"><?php echo esc_html($value) ?></span>
			</td>
		</tr>
	<?php endif; ?>
<?php endif; ?>