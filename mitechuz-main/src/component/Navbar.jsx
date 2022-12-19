
function Navbar() {
    return (
        <>
            <div className="w-[90%] m-auto">
                <div className="flex max-xl:flex-col items-center justify-between max-xl:flex-c my-5">
                    
                <div className="w-[31%]">
                        <img className="" src="https://images.unsplash.com/photo-1670995985756-0707f0d3b006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="not img" />
                    </div>
                    <div className="w-[13%] max-xl:flex-row">
                        <img className="my-[9px]" src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp" alt="img not" />
                        <img className="my-[9px]" src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp" alt="img not" />
                        <img className="my-[9px]" src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp" alt="img not" />
                        <img className="my-[9px]" src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp" alt="img not" />
                        <img className="my-[9px]" src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp" alt="img not" />
                    </div>
                    <div className="w-[53%] my-4">
                        <p className="mb-2">Motorbike</p>
                        <span className="font-bold mb-2">3150 грн</span>
                        <div className="w-8 flex mt-2 mb-2">
                            <span className="bg-white border rounded-full text-[white] mx-1 cursor-pointer">DD</span>
                            <span className="bg-[#5974a3] border rounded-full text-[#5974a3] mx-1 cursor-pointer">DD</span>
                            <span className="bg-[#fadf9a] border rounded-full text-[#fadf9a] mx-1 cursor-pointer">DD</span>
                        </div>
                        <h4 className="mb-2">Lorem ipsum dolor sit.</h4>
                        <button className="w-full h-8 text-white border mb-4">AA</button>
                        <div className="flex justify-between mb-3">
                            <button className="w-[45%] h-12 border bg-[#E0BEA2] text-white">V korzinu</button>
                            <button className="w-[45%] h-12 border bg-white ">V izbrannoe</button>
                        </div>
                        <h3 className="mb-2">Lorem, ipsum.</h3>
                        <h2 className="border-b-[1px] pb-2 mb-2">Lorem, ipsum dolor.</h2>
                        <h5 className="">Lorem ipsum dolor sit amet.</h5>
                        <p className="w-80 mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error illo ut itaque modi.</p>
                        <p className="w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem reprehenderit quisquam exercitationem animi nostrum quos quas aspernatur nemo blanditiis optio incidunt veniam repudiandae, ratione ad sint minus? Nostrum, et.</p>
                    </div>
                </div>
                    <div class="flex justify-between mb-10">
                        <div class="rounded-lg w-[28%] h-[70%] shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                            </a>
                            <div class="p-6">
                            <h3 className="text-center">Lorem, ipsum.</h3>
                            <p className="text-center font-bold">2900 grn</p>
                            <h2 className="text-center">XXS XS S M L</h2>
                            <span className="bg-white border rounded-full max-xl:hidden ml-[95px] text-[white] mx-1 cursor-pointer">DD</span>
                        <span className="bg-[#5974a3] border rounded-full max-xl:hidden text-[#5974a3] mx-1 cursor-pointer">DD</span>
                        <span className="bg-[#fadf9a] border rounded-full max-xl:hidden text-[#fadf9a] mx-1 cursor-pointer">DD</span>
                            </div>
                        </div>
                        <div class="rounded-lg w-[28%] h-[70%] shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                            </a>
                            <div class="p-6">
                            <h3 className="text-center">Lorem, ipsum.</h3>
                            <p className="text-center font-bold">2900 grn</p>
                            <h2 className="text-center">XXS XS S M L</h2>
                            <span className="bg-white border rounded-full max-xl:hidden ml-[95px] text-[white] mx-1 cursor-pointer">DD</span>
                        <span className="bg-[#5974a3] border rounded-full max-xl:hidden text-[#5974a3] mx-1 cursor-pointer">DD</span>
                        <span className="bg-[#fadf9a] border rounded-full max-xl:hidden text-[#fadf9a] mx-1 cursor-pointer">DD</span>
                            </div>
                        </div>
                        <div class="rounded-lg w-[28%] h-[70%] shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                            </a>
                            <div class="p-6">
                            <h3 className="text-center">Lorem, ipsum.</h3>
                            <p className="text-center font-bold">2900 grn</p>
                            <h2 className="text-center">XXS XS S M L</h2>
                            <span className="bg-white border rounded-full w-10 mx-auto max-xl:hidden ml-[95px] text-[white] cursor-pointer">DD</span>
                        <span className="bg-[#5974a3] border rounded-full text-[#5974a3] max-xl:hidden mx-1 cursor-pointer">DD</span>
                        <span className="bg-[#fadf9a] border rounded-full text-[#fadf9a] max-xl:hidden mx-1 cursor-pointer">DD</span>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Navbar;