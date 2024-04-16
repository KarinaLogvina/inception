<?php
/**
 * The base configuration for WordPress
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
define('DB_NAME', 'wordpress');
define('DB_USER', 'urosby');
define('DB_PASSWORD', '666');
define('DB_HOST', 'mariadb');
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');

// ** Authentication Unique Keys and Salts. ** //
define('AUTH_KEY',         '@BsD #FG9F1,^-x_}.kl!;0y9(U,MUm;xnWOo@a6n}ode<+mi7Jp.K _s~A+@,E1');
define('SECURE_AUTH_KEY',  '`Em#_d|iCqZ-w7;@WewV]/XBac^`>)gcGD8TaeG>4VUQ]I{!f~cXHo2msGe-d-G{');
define('LOGGED_IN_KEY',    '#XeJX`Qh@9!(+VelIt7(.M+s^w~?@1xMD:{~iA6G+`sm{h||yh0_:^&$&&7LfjC%');
define('NONCE_KEY',        '+gYVlT.Nqi,+I++V~C/DSK-I3i>s&|]oFsURO+}oGX*_47AG:L>|3-xOmg^}@z(e');
define('AUTH_SALT',        '<Yl0)pe{NHypsKIuC8i-K$kxPzH|sep|DniwXMs,S%f6cq-P7M9x2z#-2](|7zrl');
define('SECURE_AUTH_SALT', 'O:Q;fLFZtAvkN(i8,&o4uJ2*G7vv{mHH[5Er:Z[F?e-kS41&GlD?3C(GC/*G!kUq');
define('LOGGED_IN_SALT',   'rC^[AgF:MsQd?#_j)p#hnRQI8.|hQt);-FR0)~-8kR*-5=K#bR|PplHo6Vc>&sui');
define('NONCE_SALT',       'n@w1m*KtF2+6{$M}C[M};WThW+98W$kV8i:M%+J|o`I=4T1Z%}Ry1S|>#<|u0DNi');

$table_prefix  = 'wp_';

define('WP_DEBUG', false);

if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

require_once(ABSPATH . 'wp-settings.php');
