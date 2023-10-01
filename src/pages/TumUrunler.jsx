import React from 'react'
import { Divider, Image } from 'semantic-ui-react'

const logo1 = 'https://st1.myideasoft.com/idea/ic/51/myassets/products/393/611efdw7-zl-ac-sl1200.jpg?revision=1668621568'
const logo2 = 'https://www.aes5k.org/private/flexonn/folx-25c9/37777-oezel-neon-tabelalar-kslabilir-neon-tabela-oezellestirilebilir-kisisellestirilmis-bueyuek-led-neon-tabelalar-duvar.jpg'
const logo3 = 'https://st1.myideasoft.com/idea/ic/51/myassets/products/397/61ulyh21iol-ac-sl1500.jpg?revision=1668622388'
const logo4 = 'https://st1.myideasoft.com/idea/ic/51/myassets/products/454/it-was-alway-you-led-custom-neon-sign-acrylic-flex-creative-decor-1-1800x1800.jpg?revision=1668890656'
const logo5 = 'https://st.myideasoft.com/idea/ic/51/myassets/products/407/71y6acrrvpl-ac-sl1500.jpg?revision=1668623160'
const logo6 = 'https://m.media-amazon.com/images/I/71KGHgM7DbL._AC_UF1000,1000_QL80_.jpg'
const logo7 = 'https://img.pixers.pics/pho_wat(s3:700/FO/22/52/25/32/3/700_FO225225323_ee7b64f012b6ccf44ec6e869f2649c5a,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/cikartmalar-neon-metin-vektor-kadar-seviye-neon-tabela-tasarim-sablonu-modern-trend-tasarimi-gece-neon-tabela-gece-parlak-reklam-isik-afis-isik-sanat-kadar-seviye-vektor-cizim.jpg.jpg'
const logo8 = 'https://mrtambalaj.com.tr/2/share-130034_upload/Wanx%C4%B1ng-r%C3%BCya-neon-tabela-mektubu-led-neon-%C4%B1%C5%9F%C4%B1k.jpg'
const logo9 = 'https://st1.myideasoft.com/idea/ic/51/myassets/products/409/716gr-f3szl-ac-sl1500.jpg?revision=1668623351'
const logo10 = 'https://m.media-amazon.com/images/I/61jbPProyDL._AC_UF1000,1000_QL80_.jpg'
const logo11 = 'https://www.tenerifeere.org/admins/flexonn/49186-sen-glow-kz-neon-burcu-duvar-dekor-icin-oezel-kisisellestirilmis-kapal-yatak-odas-ev-led-neon-lambal-tabelalar.jpg'
const logo12 = 'https://www.nazk.org/promo/lich/my/26270-zhaopailao-oezel-led-neon-tabelalar-yatak-odas-sklar-duvar-dekor-dueguen-dogum-guenue-partisi-ev-dekorasyonu.jpg'
const logo13 = 'https://laohealthplanning.org/admin/best/haniol_17/116140-vinray-sosislere-zin-verilmiyor-oda-dekoru-icin-neon-tabela-ueniversite-yurdu-ve-oturma-odas-icin-led-skl-tabela.jpg'
const logo14 = 'https://thecoalfieldsymphony.co.uk/asset/light/117-5b55/5467-abooly-cilekli-suet-neon-burcu-duvar-dekoru-icin-neon-tabelalar-led-neon-yatak-odas-lambalar-oturma-odas-cocuk-odas.jpg'
const logo15 = 'https://www.cool-mania.net/mini/w-980/data/product/54/f32df9f51aebcc090547af96e81595.jpg'

export default function TumUrunler() {
    return (
        <div>
            {/* <Image.Group size='tiny'>
                <Image src={feel} />
                <Image src={logo2} />
                <Image src={feel} />
                <Image src={feel} />
            </Image.Group>
            <Divider hidden /> */}
            <Image.Group size='small'>
                <Image src={logo1} bordered />
                <Image src={logo2} bordered />
                <Image src={logo3} bordered />
                <Image src={logo4} bordered />
                <Image src={logo5} bordered />
            </Image.Group>
            <Divider hidden />
            <Image.Group size='small' >
                <Image src={logo6} bordered />
                <Image src={logo7} bordered/>
                <Image src={logo8} bordered/>
                <Image src={logo9} bordered/>
                <Image src={logo10} bordered />
            </Image.Group>

            <Divider hidden />
            <Image.Group size='small' >
                <Image src={logo11} bordered />
                <Image src={logo12} bordered/>
                <Image src={logo13} bordered/>
                <Image src={logo14} bordered/>
                <Image src={logo15} bordered />
            </Image.Group>

        </div>
    )
}
