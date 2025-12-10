
"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export const Navigation: React.FC = () => {
	const router = useRouter()

	return (
		<nav className="fixed flex flex-col text-mid_light font-3 font-light text-sm lg:text-lg bottom-0 items-center h-[60dvh] justify-start gap-10 z-50 w-[5vw]"
			>



				<div className="-rotate-90 aspect-square items-center justify-center flex"><Link
							href="/projects"
					className="duration-200 hover:text-accent"
						>
				PROJECTS
						</Link>
				</div>
				<div className="-rotate-90 aspect-square items-center justify-center flex"><Link
							href="/contact"
					className="duration-200 hover:text-accent"
						>
				CONTACT
						</Link>
				</div>
			<button
				onClick={() => router.back()}
				className="duration-200  hover:text-accent"
			>
				<ArrowLeft className="w-6 h-6 " />
			</button>

			<div className="w-[0.5px] bg-accent h-full"></div>



		</nav>
	);
};
