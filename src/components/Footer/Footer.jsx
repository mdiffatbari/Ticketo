import React from 'react';
import { FaXTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className="bg-black text-gray-300">
                <div className="max-w-11/12 mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-6">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <h2 className="text-xl font-bold text-white mb-3">
                            CS — Ticket System
                        </h2>
                        <p className="text-sm lg:pr-40 leading-relaxed">
                            CS Ticket System helps support teams manage customer issues
                            efficiently. Track tickets, monitor progress, and resolve
                            problems quickly to deliver a better customer experience.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-white">About Us</a></li>
                            <li><a className="hover:text-white">Our Mission</a></li>
                            <li><a className="hover:text-white">Contact Sales</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-white">Products & Services</a></li>
                            <li><a className="hover:text-white">Customer Stories</a></li>
                            <li><a className="hover:text-white">Download Apps</a></li>
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Information</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-white">Privacy Policy</a></li>
                            <li><a className="hover:text-white">Terms & Conditions</a></li>
                            <li><a className="hover:text-white">Join Us</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Social Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <FaXTwitter />
                                <span>@CS — Ticket System</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaLinkedin />
                                <span>@CS — Ticket System</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaFacebook />
                                <span>@CS — Ticket System</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope />
                                <span>support@cst.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 text-center py-4 text-sm">
                    © 2026 CS — Ticket System. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;