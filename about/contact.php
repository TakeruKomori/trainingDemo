<!DOCTYPE html>
<html>
<?php
        session_start();
        $mode = "input"; // 初期モード
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            if (isset($_POST["confirm"])) {
                $_SESSION["fullname"] = $_POST["fullname"];
                $_SESSION["email"] = $_POST["email"];
                $_SESSION["message"] = $_POST["message"];
                $mode = "confirm";
            } elseif (isset($_POST["send"])) {
                // 送信処理
                $mode = "complete";
            } elseif (isset($_POST["back"])) {
                $mode = "input";
            }
        }
?>
<head prefix="og:http://ogp.me/ns#">
    <meta charset="UTF-8" />
    <meta charset="utf-8">
        <meta http-equiv="content-script-type" content="text/javascript">
        <meta http-equiv="content-style-type" content="text/css">
        <title>KAKERU MIYAUCI Bicycle</title>
        <meta name="Description" content="テキスト１テキスト１テキスト１テキスト１">
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
        <meta name="format-detection" content="telephone=no">
        <meta property="og:title" content="contact">
        <meta property="og:description" content="">
        <meta property="og:type" content="website">
        <meta property="og:url" content="">
        <meta property="og:image" content="">
        <meta property="og:site_name" content="KAKERU MIYAUCI Bicycle">
        <meta name="twitter:site" content="@ユーザー名">
        <meta name="twitter:card" content="summary_large_image">    
        <meta name="note:card" content="summary_large_image">
        <meta property="fb:app_id" content="appID">
        <meta property="og:locale" content="ja_JP">
         <!-- ↓使用するファビコン生成ツールによりコードは異なります。 -->
        <link rel="apple-touch-icon" sizes="180x180" href="../img/favicon.ico">
        <link rel="icon" type="image/png" sizes="32x32" href="../img/favicon.ico">
        <link rel="icon" type="image/png" sizes="16x16" href="../img/favicon.ico">
        <link rel="manifest" href="">
        <link rel="mask-icon" href="" color="#5bbad5">
        <link rel="shortcut icon" href="../img/favicon.ico">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-config" content="/images/common/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">
        <!-- ↑使用するファビコン生成ツールによりコードは異なります。 -->
        <link rel="stylesheet" type="text/css" media="all" href="../css/style.css">

        
        <!-- ↓構造化データ(Articleの場合)、ページによって異なります。 -->
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "ページURL"
            },
            "headline": "タイトル",
            "description": "説明文",
            "image": "サムネイル画像（OGP）URL",
            "author": {
                "@type": "Organization",
                "name": "著者",
                "url": "著者のURL"
            },  
            "publisher": {
                "@type": "Organization",
                "name": "発行団体",
                "logo": {
                    "@type": "ImageObject",
                    "url": "発行団体のロゴURL"
                }
            },
            "datePublished": "記事を書いた日（ISO 8601 形式）",
            "dateModified": "記事を更新した日（ISO 8601 形式）"
        }
        </script>
        <!-- ↑構造化データ(Articleの場合)、ページによって異なります -->
</head>
<body class="l-boby ">
    <header class="l-header l-conts">
        <nav class="l-navgation p-header__inner -d-flx"><!---カーテン用、親のdisplayが効かなくなるのでインナー配置-->
                <h1 class="l-header__logo">
                <a href="../index.html" class=" c-fade-hov">
                    <img class="l-header__logo p-header__logo" alt="plofile" src="../img/logo.svg"/>
                </a>
                </h1>
                <ul class="l-header__nav p-header__nav -d-flx">
                    <li class=" p-prnt__submn"><a class="-d-ilfx -gap05" href="../index.html#l-about__ttl">About<img class="yaji" src="../img/dropD.svg"/></a>
                        <ul class="l-submenu p-submenu -d-flx l-cntr">
                            <li class="p-submenu__li c-txt"><a class="c-und-line -d-ilfx -gap05" href="../map/map.html">Access Map<img class="" src="../img/dropD.svg"/></a></li>
                        </ul>
                    </li>
                    <li class=" p-prnt__submn"><a class="-d-ilfx -gap05" href="../index.html#l-bicycle__ttl">Bicycle<img class="yaji" src="../img/dropD.svg"/></a>
                        <ul class="l-submenu p-submenu  l-cntr -left">
                            <li class="p-submenu__li c-txt"><img class="c-card__img c-fadein"  alt="" src="img/bicycle1.jpg"/><a class="c-und-line -d-ilfx -gap05" href="../bicycle/bicycle1.html">Bicycle model-1<img class="yaji" src="../img/dropD.svg"/></a></li>
                            <li class="p-submenu__li c-txt"><img class="c-card__img c-fadein"  alt="" src="img/bicycle1.jpg"/><a class="c-und-line -d-ilfx -gap05" href="../bicycle/bicycle2.html">Bicycle model-2<img class="yaji" src="../img/dropD.svg"/></a></li>
                            <li class="p-submenu__li c-txt"><img class="c-card__img c-fadein"  alt="" src="img/bicycle1.jpg"/><a class="c-und-line -d-ilfx -gap05" href="../bicycle/bicycle3.html">Bicycle model-3<img class="yaji" src="../img/dropD.svg"/></a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
    </header>
    <div class="l-contact l__cts l-cntr l-conts -m-top-5 c-ttl-anm">
        <h1 class="l-map__ttl l-cntr c-ttl" alt="Acess Map"> Contact</h1>
        <!-- contact.php の例 -->
        <?php if ($mode === "input"): ?>
        <form class="p-form -flx-clm" method="post" action="">
            
            <div class="p-lb-card">
                <div class="p-textarea-wrap">
                <span class="p-required -red">※</span>
                <label class=""><input class="p-lb-waku -b-sdw" placeholder="お名前" type="text" name="fullname" value="<?php echo isset($_SESSION['fullname']) ? htmlspecialchars($_SESSION['fullname']) : ''; ?>"></label><br>
                </div>    
            </div>
            <div class="p-lb-card">
                <div class="p-textarea-wrap">
                <span class="p-required -red">※</span>
                <label><input required class="p-lb-waku -b-sdw" placeholder="e-mail"  type="email" name="email" value="<?php echo isset($_SESSION['email']) ? htmlspecialchars($_SESSION['email']) : ''; ?>"></label><br>
                </div>    
            </div>
            <div class="p-lb-card">
                <div class="p-textarea-wrap">
                <span class="-red p-required">※</span>
                 <label><textarea class="p-lb-waku -b-sdw" placeholder="お問い合わせ内容" name="message"><?php echo isset($_SESSION['message']) ? htmlspecialchars($_SESSION['message']) : ''; ?></textarea></label><br>
                </div>    
            </div>
            <input class="p-lb-waku" type="submit" name="confirm" value="ご登録内容の確認">
        </form>

        <?php elseif ($mode === "confirm"): ?>
        <p>以下の内容でよろしいですか？</p>
        <p>名前：<?php echo htmlspecialchars($_SESSION["fullname"]); ?></p>
        <p>メール：<?php echo htmlspecialchars($_SESSION["email"]); ?></p>
        <p>本文：<?php echo nl2br(htmlspecialchars($_SESSION["message"])); ?></p>
        <form method="post" action="">
            <input type="submit" name="back" value="戻る">
            <input type="submit" name="send" value="送信">
        </form>

        <?php else: ?>
        <p>送信完了しました。ありがとうございました。</p>
        <?php endif; ?>
        </body>
        </html>

          

    </div>

    <div class="l-goBackTop l-cntr">
        <a class="c-fade-hov" href="../index.html">トップに戻る</a>
    </div>

    <footer class="l-footer c-footer l-cntr">
        <p class="l-footer__txt">&copy;2020 Profile</p>
    </footer>
     <!-- jQuery CDN（Google Hosted） -->
     <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
     <script>window.jQuery || document.write('<script src="/js/jquery-3.7.1.min.js"><\/script>')</script>
     <script src="https://unpkg.com/lenis@1.2.3/dist/lenis.min.js"></script> 
     <script src="../js/sctipt.js"></script> 
</body>
</html>