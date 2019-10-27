<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '>,CHhQ+>!I@Fl@=]8?Y^W,R_-Tq, y_-f-W[cS|L7zU}b|u/6![O,% >FH_wyQ$X' );
define( 'SECURE_AUTH_KEY',  'GUH^|Ctl]}7OmFav=uSmOQN}(c wg0AxR+[g4Bx1aa3Z!Dv1I:ke`5Lmu}AQn25b' );
define( 'LOGGED_IN_KEY',    'Qw{C<l3B.?UF})1r`;=%n@IwZ~Ncp</<K^ ?iLOcXDOk^s`%3=wqcaZN&-tt%h;e' );
define( 'NONCE_KEY',        'a6l@noIhLR];]_FvUU|lpiVx, &;{4&!5BS4F(/a,DP2?gk!4+yx3YlB<i,ve-&&' );
define( 'AUTH_SALT',        '`efe.)Gw]kK]>?>(.4vuWgs,m2PfwZOxM9(~ `z}?;!jIrhf?z;w[XH#Gd->+!%3' );
define( 'SECURE_AUTH_SALT', '+i-Wgn`_x{ArH@gTa,o:47DnJ97^3PK2k#tR0160/L1_:!nh#0DJKfiM)z9F.KVA' );
define( 'LOGGED_IN_SALT',   '%{yPu`wab?[xo%#,ARW.1*Oit-wdTGM?y@}P6AjBv>ta$tF%x5O?fSdz[ynoZ,!B' );
define( 'NONCE_SALT',       'i?+=Zhn9)JLzDZ.w>b`>3kgZdZ*},F6Ak/#{]8^!?&S,Aa7yUohvj!E:vW0NCc9Q' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
