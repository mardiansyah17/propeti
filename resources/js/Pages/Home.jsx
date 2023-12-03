import {Button, Carousel, Typography} from "@material-tailwind/react";
import {Link} from "@inertiajs/react";


export default function Home() {
    return (
        <>
            <Carousel className="h-screen">
                <div className="relative h-full w-full">
                    <img
                        src="/img/hero.png"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <Content/>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="/img/hero2.jpg"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <Content/>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="/img/hero1.jpg"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                    <Content/>
                </div>
            </Carousel>
        </>
    );
}

function Content() {
    return (
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
                <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                    Jual beli propeti terpercaya
                </Typography>
                <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                >
                    Jual beli properti terpercaya di Indonesia dengan harga terjangkau dan proses yang mudah dan cepat
                    hanya di Properti.com
                </Typography>
                <div className="flex justify-center gap-2">
                    <Link href="/propeties">
                        <Button size="lg" color="white">
                            Explore
                        </Button>
                    </Link>
                    <Link href={`/post-propeti`}>
                        <Button size="lg" color="white">
                            Jual propeti
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
