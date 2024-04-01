"use client"

import { Logo } from "@/app/(marketing)/_components/logo";
import Link from "next/link";

const privacyPolicy = () => {
    return ( 
        <div className="dark:bg-[#2c2c2c]">
            <div className="p-4">
                <Link href="/">
                    <Logo/>
                </Link>
            </div>
            <div className="text-gray-600 md:text-xl font-regular max-w-full md:max-w-3xl px-6 md:m-auto dark:text-[#D3D3D4] py-12">
                    <h2><b>Privacy Policy for Inconcise</b></h2>
                    <br/>
                    <p className="text-sm">Last Updated: 25 April 2024</p>
                    <br/>
                    <p className="text-lg">This Privacy Policy describes how Inconcise collects, uses, and discloses information when you use our platform. By accessing or using the Service, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our platform</p>
                    <br />
                    <h3 className="text-base"><b>1. Information We Collect</b></h3>
                    <br />
                    <h4 className="text-base ml-4">1.1 Information You Provide</h4>
                    <p className="ml-4">Describe what information users provide when they sign up for your service, such as name, email address, payment information, etc.</p>
                    <br />
                    <h4 className="text-base ml-4">1.2 Information We Collect Automatically</h4>
                    <p className="ml-4">Describe what information is automatically collected when users use your service, such as IP address, browser type, usage data, etc.</p>
                    <br />
                    <h3 className="text-base"><b>2. How We Use Your Information</b></h3>
                    <br />
                    <h4 className="text-base ml-4">2.1 Provide and Improve the Service</h4>
                    <p className="ml-4">Explain how you use the collected information to provide, maintain, and improve the service.</p>
                    <br />
                    <h4 className="text-base ml-4">2.2 Personalization</h4>
                    <p className="ml-4">Explain how you personalize the user experience based on the collected information.</p>
                    <br />
                    <h4 className="text-base ml-4">2.3 Legal Compliance</h4>
                    <p className="ml-4">Explain how you use the collected information to comply with applicable laws and regulations.</p>
                    <br />
                    <h3 className="text-base"><b>3. How We Share Your Information</b></h3>
                    <br />
                    <h4 className="text-base ml-4">3.1 Service Providers</h4>
                    <p className="ml-4">Explain who you share the information with, such as third-party service providers.</p>
                    <br />
                    <h4 className="text-base ml-4">3.2 Business Transfers</h4>
                    <p className="ml-4">Explain how the information may be transferred in the event of a merger, acquisition, or sale of assets.</p>
                    <br />
                    <h4 className="text-base ml-4">3.3 Legal Requirements</h4>
                    <p className="ml-4">Explain when you may disclose the information to comply with legal requirements.</p>
                    <br />
                    <h3 className="text-base"><b>4. Your Choices</b></h3>
                    <br />
                    <h4 className="text-base ml-4">4.1 Account Information</h4>
                    <p className="ml-4">Explain how users can update or correct their account information.</p>
                    <br />
                    <h4 className="text-base ml-4">4.2 Communications Preferences</h4>
                    <p className="ml-4">Explain how users can opt out of receiving promotional communications.</p>
                    <br />
                    <h3 className="text-base"><b>5. Data Security</b></h3>
                    <p className="ml-4">Explain the measures you take to protect user information.</p>
                    <br />
                    <h3 className="text-base"><b>6. International Transfers</b></h3>
                    <p className="ml-4">Explain if user information may be transferred to and processed in other countries.</p>
                    <br />
                    <h3 className="text-base"><b>8. Changes to this Privacy Policy</b></h3>
                    <p className="ml-4">Explain how you will notify users of changes to the privacy policy and how their continued use constitutes acceptance.</p>
                    <br />
                    <h3 className="text-base"><b>9. Contact Us</b></h3>
                    <p className="ml-4">Provide contact information for users to reach out with questions or concerns.</p>
                    <br />
                </div>
        </div>
     );
}
 
export default privacyPolicy;