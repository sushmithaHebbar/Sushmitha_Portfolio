import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer flex justify-between items-center flex-wrap py-8 px-[10%]">
            <div className="footer-text">
                <p className="text-white font-semibold">Copyright &copy; 2024 by Sushmitha | All Rights Reserved.</p>
            </div>
            <div className="footer-iconTop">
                <Link
                    href="#home"
                    className="inline-flex justify-center items-center p-3 bg-primary rounded-lg transition-transform duration-300 hover:scale-110"
                >
                    <ArrowUp className="text-accent" size={24} />
                </Link>
            </div>
        </footer>
    );
}
