
"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export const Navigation: React.FC = () => {
	const router = useRouter()

	return (
		<nav >
			<div
				className="fixed flex flex-col right-[90lvw] text-mid_light font-extralight text-xl bottom-0 items-center  h-[60dvh]  justify-start gap-10 z-50 bg-sla te-100 w-[10vw]"
			>
				<button
					onClick={() => router.back()}
					className="duration-200 text-light hover:text-accent"
				>
					<ArrowLeft className="w-6 h-6 " />
				</button>


				<div className="-rotate-90 aspect-square items-center justify-center flex"><Link
							href="/projects"
					className="duration-200 hover:text-accent"
						>
							Projects
						</Link>
				</div>
				<div className="-rotate-90 aspect-square items-center justify-center flex"><Link
							href="/contact"
					className="duration-200 hover:text-accent"
						>
							Contact
						</Link>
				</div>

				<div className="w-[0.5px] bg-primary h-full"></div>


				</div>
			{/* </div> */}
		</nav>
	);
};
