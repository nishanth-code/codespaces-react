import '../footerNav.css'
import Section from './section'
const app =()=>{
    return(
      <>
        <section className="f-bacground">
            <div className="left-content">
                <div className="content">
                    <span className="group-header">categories</span>
                    <span className="group-text">birthday</span>
                    <span className="group-text">anniversary</span>
                    <span className="group-text">Bride To Be </span>
                    <span className="group-text">Bachelorette</span>
                    <span className="group-text">House Warming</span>
                    <span className="group-text">Home Coming</span>
                   
                </div>
                <div className="content">
                    <span className="group-header">policies</span>
                    <span className="group-text">Privacy policy</span>
                    <span className="group-text">Cancellation and refunds</span>
                    <span className="group-text">About Us </span>
                </div>
                <div className="content">
                    <span className="group-header">About</span>
                    <span className="group-text">Contact </span>
                    <span className="group-text">Blog</span>
                    <span className="group-text">FAQ’s</span>
                </div>
            </div>
            <div className="right-content">
                     
                  <img src={require('../images/3.png')} alt="company logo"/>        
                                  
            </div>
        </section>
        <div>
            <p align="center" className='footer-text'> &copy; ebo Solutions Pvt. Ltd. | Satra Plaza, Navi Mumbai - 400703</p>
            
        </div>
        <section className='footer-ultimate'>
            <span className='footer-head'>more about us</span>
            <hr/>
            <p className='footer-text'>ONLINE SHOPPING MADE EASY AT MYNTRA
If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.
BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION
Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.
Smart men’s clothing - At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.
Trendy women’s clothing - Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.</p>
            
     </section>
            
      </>  
    );
}
export default app;