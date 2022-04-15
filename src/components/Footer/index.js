import React from "react";
import {BsTwitter, BsGithub, BsLinkedin} from "react-icons/bs";

const Footer = () => {
    return(
        <div>
            <div className="mt-48 border-t">
                <div className="max-w-7xl space-y-7 md:space-y-0 md:mx-auto mx-5 mt-24 md:flex justify-between flex-wrap">
                    <div>
                        <div className="flex items-center">
                            <span>
                                <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.8801 2.03207C30.2254 1.00286 29.1781 1.44514 28.6694 1.84436C28.0994 1.47407 27.5274 1.16357 26.9601 0.945643C25.3988 0.345214 22.8608 0 20.0001 0C17.1381 0 14.6015 0.345214 13.0395 0.946286C12.4722 1.16421 11.8988 1.47536 11.3288 1.84564C10.8188 1.44707 9.7735 1.00736 8.12018 2.03529C4.53419 4.26214 -3.14779 3.3795 1.39953 12.9786C2.1302 14.5196 2.69286 15.6086 3.18686 16.2141C3.14153 21.7813 5.04352 29.07 8.82017 31.437C13.3155 34.254 16.8095 36 20.3335 36C23.8561 36 27.3508 34.254 31.8454 31.4364C35.6761 29.0372 37.0821 21.6174 36.8714 16.1383C37.3507 15.5205 37.8987 14.4572 38.6007 12.9754C43.1474 3.37629 35.4661 4.25893 31.8801 2.03207ZM31.1188 30.3589C26.8281 33.0474 23.5275 34.7143 20.3335 34.7143C17.1388 34.7143 13.8375 33.0474 9.54684 30.3589C6.34885 28.3545 4.58685 21.7009 4.53285 16.5542C5.12685 16.0444 5.76685 14.6301 6.67485 12.2181C7.41418 10.2523 7.38818 8.77114 7.57418 7.44107C9.2795 5.07986 11.5048 2.92114 13.5342 2.14007C14.9228 1.60521 17.3408 1.28571 20.0001 1.28571C22.6595 1.28571 25.0761 1.60521 26.4668 2.14007C28.4968 2.92114 30.7234 5.08114 32.4274 7.44364C32.6121 8.77179 32.5874 10.2523 33.3261 12.2149C34.2948 14.7864 34.9574 16.2238 35.5854 16.6384C35.7161 21.8417 34.2668 28.3866 31.1188 30.3589Z" fill="black"/>
                                <path d="M14.8328 17.1842C14.8328 14.8757 12.8888 12.9979 10.4995 12.9979C8.11016 12.9979 6.16617 14.8757 6.16617 17.1842C6.16617 19.4934 8.11016 21.3718 10.4995 21.3718C12.8888 21.3718 14.8328 19.4934 14.8328 17.1842ZM7.78616 19.5602C8.28762 19.9009 8.88608 20.0837 9.49949 20.0835C11.1562 20.0835 12.4995 18.7862 12.4995 17.1842C12.5002 16.4162 12.1845 15.6794 11.6219 15.1359C11.0594 14.5923 10.2959 14.2864 9.49949 14.2856C8.86083 14.2856 8.27216 14.4816 7.7855 14.8101C8.12751 14.4426 8.5459 14.1485 9.01348 13.947C9.48105 13.7456 9.98736 13.6412 10.4995 13.6408C12.5208 13.6408 14.1661 15.2306 14.1661 17.1842C14.1661 19.1385 12.5208 20.7289 10.4995 20.7289C9.98752 20.7285 9.48137 20.6242 9.01392 20.4228C8.54647 20.2215 8.12816 19.9276 7.78616 19.5602Z" fill="black"/>
                                <path d="M29.5001 12.9979C27.1108 12.9979 25.1668 14.8757 25.1668 17.1842C25.1668 19.4934 27.1108 21.3718 29.5001 21.3718C31.8894 21.3718 33.8334 19.4934 33.8334 17.1842C33.8334 14.8764 31.8894 12.9979 29.5001 12.9979ZM29.5001 20.7289C27.4794 20.7289 25.8334 19.1385 25.8334 17.1842C25.8334 15.2306 27.4794 13.6408 29.5001 13.6408C30.5768 13.6408 31.5428 14.094 32.2148 14.8101C31.713 14.469 31.1141 14.2858 30.5001 14.2856C29.7037 14.2864 28.9402 14.5923 28.3776 15.1359C27.815 15.6794 27.4994 16.4162 27.5001 17.1842C27.4997 17.5645 27.5769 17.9412 27.7274 18.2927C27.878 18.6443 28.0988 18.9638 28.3774 19.233C28.656 19.5022 28.9868 19.7159 29.351 19.8618C29.7152 20.0077 30.1057 20.0831 30.5001 20.0835C31.1381 20.0835 31.7281 19.8881 32.2134 19.5602C31.8715 19.9277 31.4532 20.2217 30.9857 20.423C30.5183 20.6244 30.0121 20.7286 29.5001 20.7289Z" fill="black"/>
                                <path d="M26.0368 19.7851C24.6081 18.3509 22.4081 17.5281 19.9981 17.5281C17.5902 17.5281 15.3915 18.3503 13.9668 19.7858L9.20285 24.5937C7.73219 26.0781 7.73219 28.492 9.20285 29.9776C9.91885 30.6996 10.8735 31.0975 11.8902 31.0975C12.7199 31.0965 13.5249 30.8249 14.1742 30.3267L15.9855 32.1556C16.9375 33.1116 18.4008 33.6593 20.0008 33.6593C21.6001 33.6593 23.0621 33.1109 24.0115 32.155L25.8255 30.3254C26.4743 30.8245 27.2795 31.0967 28.1095 31.0975C29.1261 31.0975 30.0808 30.6996 30.7981 29.977C32.2668 28.492 32.2668 26.0781 30.7981 24.5937L26.0368 19.7851ZM23.5301 31.7101C22.7075 32.5401 21.4195 33.0158 20.0015 33.0158C18.5815 33.0158 17.2928 32.5401 16.4675 31.7108L14.6655 29.8909L16.4428 28.0979L17.1482 27.3876C16.8308 28.2811 16.7175 29.0185 16.8182 29.5816C17.1335 31.3566 18.6435 32.1505 20.0001 32.1505C21.3575 32.1505 22.8675 31.3566 23.1828 29.5823C23.2828 29.0179 23.1695 28.2805 22.8521 27.385L25.3355 29.8896L23.5301 31.7101ZM30.3154 29.5328C30.0323 29.8233 29.6906 30.055 29.3112 30.2135C28.9319 30.3721 28.5229 30.4541 28.1095 30.4546C27.3515 30.4546 26.6408 30.1711 26.0715 29.6723L26.0361 29.6408C25.993 29.6031 25.9483 29.567 25.9021 29.5328L21.6715 25.2649L21.1388 24.7268C20.8561 24.4426 20.4421 24.2794 20.0001 24.2794C19.5581 24.2794 19.1441 24.4426 18.8628 24.7261L18.3288 25.2649L14.0495 29.5714C14.0196 29.594 13.9905 29.6176 13.9622 29.6421L13.9288 29.6723C13.3602 30.1705 12.6495 30.4546 11.8902 30.4546C11.0568 30.4546 10.2735 30.1268 9.68485 29.5328C8.45685 28.2927 8.45685 26.2767 9.68485 25.0373L14.4488 20.23C15.7475 18.9218 17.7708 18.1709 19.9981 18.1709C22.2268 18.1709 24.2528 18.9218 25.5548 20.2294L30.3154 25.0373C31.5428 26.2767 31.5428 28.294 30.3154 29.5328Z" fill="black"/>
                                <path d="M20.0001 18.3285C17.8288 18.3285 16.0681 18.6551 16.0681 20.349C16.0681 21.6951 19.1961 22.8889 20.0001 22.8889C20.8028 22.8889 23.9328 21.6951 23.9328 20.349C23.9321 18.6551 22.1721 18.3285 20.0001 18.3285Z" fill="black"/>
                                <path d="M15.5421 22.5007L14.8755 21.8566L14.2088 22.502L14.8755 23.1461L15.5421 22.5007Z" fill="black"/>
                                <path d="M13.2882 24.9165L12.6215 24.2736L13.2888 23.6301L13.9555 24.273L13.2882 24.9165Z" fill="black"/>
                                <path d="M14.7088 24.9178L15.3755 25.5619L16.0421 24.9165L15.3755 24.2723L14.7088 24.9178Z" fill="black"/>
                                <path d="M24.4575 22.5007L25.1241 23.1461L25.7908 22.502L25.1241 21.8566L24.4575 22.5007Z" fill="black"/>
                                <path d="M26.7115 24.9159L26.0448 24.2717L26.7115 23.6295L27.3781 24.2743L26.7115 24.9159Z" fill="black"/>
                                <path d="M23.9575 24.9165L24.6241 25.5619L25.2908 24.9178L24.6241 24.2723L23.9575 24.9165Z" fill="black"/>
                                </svg>
                            </span>
                            <div>
                                <h1 className="text-2xl ml-1 font-medium">DogHub</h1>
                            </div>
                        </div>
                        <p className="md:w-317px w-full mt-6 text-lightgray">
                            The Dogs API was made by dog.ceo, you could 
                            buy the author a dog treat via this link https://www.paypal.com/paypalme/dogapi, you could also view the project on Github via this link https://github.com/ElliottLandsborough/dog-ceo-api
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium md:4 md:mb-7">Popular</h2>
                        <p className="text-lightgray text-sm">Categories</p>
                        <p className="mt-4 text-lightgray text-sm">New Arrivals</p>
                        <p className="mt-4 text-lightgray text-sm">Popular</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium md:4 md:mb-7">Breed</h2>
                        <p className="text-lightgray text-sm">About Us</p>
                        <p className="mt-4 text-lightgray text-sm">Contact Us</p>
                        <p className="mt-4 text-lightgray text-sm">FAQ</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium mb-7">Join Newsettler</h2>
                        <p className="text-lightgray text-sm w-272px"> To learn more and get major updates, subscribe to our newsletter</p>
                        <div className="border h-12 mt-4 rounded-full px-3 flex justify-between items-center">
                            <p className="text-sm text-coregray">enter your email address</p>
                            <span className="bg-black w-10 flex justify-center items-center rounded-full h-10">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5612 0.145173C15.6304 0.214505 15.6778 0.302647 15.6973 0.398651C15.7169 0.494654 15.7078 0.594287 15.6712 0.685173L9.85221 15.2322C9.80093 15.3603 9.7153 15.4718 9.60474 15.5543C9.49418 15.6369 9.36299 15.6874 9.22559 15.7002C9.0882 15.713 8.94993 15.6877 8.826 15.627C8.70208 15.5663 8.5973 15.4726 8.52321 15.3562L5.34521 10.3612L0.350207 7.18317C0.233525 7.10916 0.139559 7.00434 0.0786769 6.8803C0.0177952 6.75626 -0.00763512 6.61781 0.00519203 6.48023C0.0180192 6.34264 0.0686051 6.21128 0.151368 6.10063C0.234131 5.98998 0.345853 5.90434 0.474207 5.85317L15.0212 0.0361732C15.1121 -0.000414535 15.2117 -0.00949426 15.3077 0.0100619C15.4037 0.0296181 15.4919 0.0769483 15.5612 0.146173V0.145173ZM6.34321 10.0692L9.10421 14.4072L13.8372 2.57517L6.34321 10.0692ZM13.1302 1.86817L1.29821 6.60117L5.63721 9.36117L13.1312 1.86817H13.1302Z" fill="white"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl md:mx-auto md:mx-10 border-t-2 mt-7 md:py-10">
                    <div className="md:flex flex-wrap justify-between mx-10 text-sm">
                        <div className="flex items-center space-x-2">
                            <span><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00195 0C6.4197 0 4.87299 0.469192 3.55739 1.34824C2.2418 2.22729 1.21642 3.47672 0.61092 4.93853C0.0054194 6.40034 -0.153007 8.00887 0.155674 9.56072C0.464356 11.1126 1.22628 12.538 2.3451 13.6569C3.46392 14.7757 4.88939 15.5376 6.44123 15.8463C7.99308 16.155 9.60161 15.9965 11.0634 15.391C12.5252 14.7855 13.7747 13.7602 14.6537 12.4446C15.5328 11.129 16.002 9.58225 16.002 8C15.9996 5.879 15.1559 3.84557 13.6562 2.3458C12.1564 0.846028 10.1229 0.00240243 8.00195 0V0ZM8.00195 14.7692C6.66313 14.7692 5.35437 14.3722 4.24117 13.6284C3.12798 12.8846 2.26035 11.8274 1.748 10.5905C1.23566 9.35356 1.1016 7.99249 1.36279 6.67939C1.62399 5.36629 2.26869 4.16012 3.21539 3.21343C4.16208 2.26674 5.36824 1.62203 6.68134 1.36084C7.99445 1.09965 9.35551 1.2337 10.5924 1.74605C11.8293 2.25839 12.8866 3.12602 13.6304 4.23922C14.3742 5.35241 14.7712 6.66117 14.7712 8C14.7691 9.79468 14.0553 11.5153 12.7863 12.7843C11.5172 14.0534 9.79664 14.7672 8.00195 14.7692V14.7692ZM5.54065 7.99961C5.5407 8.51624 5.70329 9.01976 6.00539 9.43885C6.30749 9.85794 6.73379 10.1714 7.22391 10.3347C7.71403 10.4981 8.24312 10.5031 8.73625 10.3491C9.22938 10.1951 9.66156 9.88981 9.97157 9.47654C10.0696 9.34606 10.2155 9.25988 10.3771 9.23695C10.4571 9.22559 10.5385 9.23011 10.6168 9.25024C10.6951 9.27037 10.7686 9.30572 10.8332 9.35427C10.8978 9.40282 10.9522 9.46361 10.9933 9.53319C11.0345 9.60277 11.0615 9.67976 11.0728 9.75977C11.0842 9.83978 11.0796 9.92125 11.0595 9.99951C11.0394 10.0778 11.004 10.1513 10.9555 10.2159C10.4904 10.8357 9.8421 11.2934 9.10244 11.5242C8.36278 11.7551 7.56923 11.7474 6.83418 11.5023C6.09913 11.2571 5.45983 10.7869 5.00682 10.1583C4.5538 9.52968 4.31003 8.77447 4.31003 7.99961C4.31003 7.22476 4.5538 6.46955 5.00682 5.84092C5.45983 5.21229 6.09913 4.74211 6.83418 4.49697C7.56923 4.25182 8.36278 4.24414 9.10244 4.475C9.8421 4.70586 10.4904 5.16357 10.9555 5.78331C11.051 5.91393 11.0912 6.07691 11.0674 6.23695C11.0436 6.397 10.9577 6.54123 10.8284 6.63843C10.699 6.73564 10.5366 6.77798 10.3762 6.7563C10.2159 6.73463 10.0705 6.65067 9.97165 6.52261C9.66164 6.1093 9.22945 5.804 8.7363 5.64996C8.24314 5.49592 7.71402 5.50094 7.22388 5.66432C6.73374 5.8277 6.30743 6.14116 6.00533 6.56028C5.70323 6.97941 5.54066 7.48296 5.54065 7.99961V7.99961Z" fill="black"/>
                                </svg>
                            </span>
                            <h3>2022 Christian Chiemela</h3>
                            <div className="md:flex display-none space-x-6 text-primary-black">
                                <h3 className="border-b-2 md:ml-24">Privacy Policy</h3>
                                <h3 className="border-b-2">Terms of service</h3>
                            </div>
                        </div>
                        <div className="flex space-x-6">
                            <a href="https://twitter.com/chris_chiemela"><BsTwitter /></a>
                            <a href="https://github.com/chris097"><BsGithub /></a>
                            <a href="https://www.linkedin.com/in/christian-chiemela-b8881619a/"><BsLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;