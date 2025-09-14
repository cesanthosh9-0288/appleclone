import React from "react";
function Footer() {
    const disclaimers = [
        `Testing conducted by Apple in July 2025 using AirPods Pro 3 paired with iPhone 16 with pre-release AirPods firmware and iOS 26. Noise reduction was tested in accordance with IEC 60268-24. Comparison made against the best-selling wireless in-ear headphones commercially available at the time of testing. Performance depends on device settings, environment and many other factors.`,

        `Built-in heart rate monitor is intended for use during workouts with the Fitness app and compatible third-party apps on iPhone running iOS 26 and later. Refer to support.apple.com/en-in/ for more information.`,

        `Live Translation with AirPods works on AirPods 4 with Active Noise Cancellation and AirPods Pro 2 and later with the latest firmware when paired with an Apple Intelligence–enabled iPhone running iOS 26 and later. Supports English (UK, US), French (France), German, Portuguese (Brazil) and Spanish (Spain). For more information, see Feature Availability.`,

        `Testing conducted by Apple in July and August 2025 using pre-production AirPods Pro 3 with MagSafe Charging Case paired with pre-production iPhone 17 Pro units, all with pre-release software. The playlist consisted of 358 unique audio tracks purchased from the iTunes Store (256-Kbps AAC encoding). Volume was set to 50% and Active Noise Cancellation was enabled. With Spatial Audio and Head Tracking enabled, listening time was up to 7.5 hours. Testing consisted of full AirPods Pro battery discharge while playing audio until the first AirPod Pro stopped playback. Battery life depends on device settings, environment, usage and many other factors.`,

        `Requires an Apple Intelligence–enabled iPhone nearby and Bluetooth headphones with device and Siri language set to English. Apple Intelligence is available in beta. Some features may not be available in all regions or languages. For feature and language availability and system requirements, see support.apple.com/121115.`,

        `All-day battery life including sleep tracking is based on the following use: 300 time checks, 90 notifications, 15 minutes of app use, a 60-minute workout with music playback from Apple Watch via Bluetooth and 6 hours of sleep tracking over the course of 24 hours; Apple Watch Series 11 (GPS) usage includes connection to iPhone via Bluetooth during the entire 24-hour test; Apple Watch Series 11 (GPS + Cellular) usage includes a total of 4 hours of cellular connection and 20 hours of connection to iPhone via Bluetooth over the course of 24 hours. Testing conducted by Apple in July and August 2025 using pre-production Apple Watch Series 11 (GPS) and Apple Watch Series 11 (GPS + Cellular), each paired with an iPhone; all devices tested with pre-release software. Battery life varies by use, configuration, cellular network, signal strength and many other factors; actual results will vary.`,

        `The Vitals app is for wellness purposes only and not for medical use.`,

        `Testing conducted by Apple in July and August 2025 using pre-production Apple Watch SE 3 (GPS + Cellular) and Apple Watch SE 2 (GPS + Cellular), each paired with an iPhone; all devices tested with pre-release software, Apple Watch Magnetic Fast Charger to USB-C Cable (Model A2515) and Apple 20W USB-C Power Adapter (Model A2305). Charge time varies with adapter, region, settings, initial battery levels, usage and environmental factors; actual results will vary.`,

        `Multi-day battery life including sleep tracking is based on the following use: 600 time checks, 180 notifications, 30 minutes of app use, a 60-minute workout with music playback from Apple Watch via Bluetooth, and 6 hours of sleep tracking over the course of 42 hours; Apple Watch Ultra 3 usage includes a total of 8 hours of cellular connection and 34 hours of connection to iPhone via Bluetooth over the course of 42 hours. Testing conducted by Apple in July and August 2025 using pre-production Apple Watch Ultra 3 paired with an iPhone; all devices tested with pre-release software. Battery life varies by use, configuration, cellular network, signal strength and many other factors; actual results will vary.`,

        `Data plan is required. 5G is available in selected markets and through selected carriers. Speeds vary based on site conditions and carrier. For details on 5G support, contact your carrier and see apple.com/in/watch/cellular. Apple Watch Ultra 3, Apple Watch Series 11 and Apple Watch SE 3 require iPhone 11 or later with iOS 26 or later. Features are subject to change. Some features, applications and services may not be available in all regions or all languages.`
    ];

    return (
        <div className="bg-black text-gray-500 text-xs py-6 border-t border-gray-300 text-left">
            <div className="max-w-7xl mx-auto px-4 space-y-3">
                {disclaimers.map((text, index) => (
                    <p key={index}>
                        <span className="mr-1">{index + 1}.</span> {text}
                    </p>
                ))}
            </div>
            
        </div>

    );
}

export default Footer;
