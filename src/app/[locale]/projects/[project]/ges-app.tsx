import React from 'react'
import Image from "next/image";
import { useTranslations } from 'next-intl';

function GESApp() {
    const t = useTranslations('GESApp');

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col justify-center w-full max-w-2xl bg-neutral-900 border border-sky-950 rounded-lg'>
                <Image
                    className="rounded-t-lg"
                    src="/ges-app.webp"
                    alt="GESFaturação logo"
                    layout="responsive"
                    width={100}
                    height={50}
                    draggable={false}
                />
                <div className='p-8'>
                    <h1 className='text-3xl mb-6 text-blue-400 text-center'><b>{t('title')}</b></h1>
                    <p className="text-base">{t('text')}</p>

                    <h2 className='text-xl mt-8 mb-2'>{t('featuresTitle')}</h2>
                    <ul className='text-base list-disc list-inside space-y-1'>
                        <li>{t('feature1')}</li>
                        <li>{t('feature2')}</li>
                        <li>{t('feature3')}</li>
                        <li>{t('feature4')}</li>
                        <li>{t('feature5')}</li>
                        <li>{t('feature6')}</li>
                        <li>{t('feature7')}</li>
                        <li>{t('feature8')}</li>
                        <li>{t('feature9')}</li>
                        <li>{t('feature10')}</li>
                        <li>{t('feature11')}</li>
                        <li>{t('feature12')}</li>
                    </ul>

                    <div className='text-base mt-8'>
                        <h1 className='text-xl mb-4'>{t('technologiesTitle')}</h1>
                        <div className='flex flex-wrap justify-center items-center gap-4'>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>TypeScript</p>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>React</p>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>Remix</p>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>PostgreSQL</p>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>Prisma</p>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>Node.js</p>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>Express.js</p>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>Polaris</p>
                            <p className='p-2 border border-neutral-400 rounded-lg transition-transform hover:scale-110'>Heroku</p>
                        </div>
                    </div>

                    <p className="text-base mt-8">{t('conclusion')}</p>

                    <Image
                        className="mt-8 rounded-lg"
                        src="/ges/ges-main.webp"
                        alt="GES APP Page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                    <Image
                        className="mt-8 rounded-lg"
                        src="/ges/ges-products.webp"
                        alt="GES APP Page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                    <Image
                        className="mt-8 rounded-lg"
                        src="/ges/ges-product-modal.webp"
                        alt="GES APP Page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                    <Image
                        className="mt-8 rounded-lg"
                        src="/ges/ges-orders.webp"
                        alt="GES APP Page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                    <Image
                        className="mt-8 rounded-lg"
                        src="/ges/ges-invoice.webp"
                        alt="GES APP Page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                    <Image
                        className="mt-8 rounded-lg"
                        src="/ges/ges-normal-invoice.webp"
                        alt="GES APP Page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                    <Image
                        className="mt-8 rounded-lg"
                        src="/ges/ges-invoice-modal.webp"
                        alt="GES APP Page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                    <Image
                        className="mt-8 rounded-lg"
                        src="/ges/ges-receipt.webp"
                        alt="GES APP Page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                    <Image
                        className="mt-8 rounded-lg"
                        src="/ges/ges-receipt-modal.webp"
                        alt="GES APP Page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                    <Image
                        className="mt-8 rounded-lg"
                        src="/ges/ges-pref.webp"
                        alt="GES APP Page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                    <Image
                        className="mt-8 rounded-lg"
                        src="/ges/ges-log.webp"
                        alt="GES APP Page"
                        layout="responsive"
                        width={100}
                        height={50}
                    />
                </div>
            </div>
        </div>
    )
}

export default GESApp;