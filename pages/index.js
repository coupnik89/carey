import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import styles from '../styles/Home.module.css'

import { services } from '../data'
import { ShieldCheckIcon, UserGroupIcon, TruckIcon } from '@heroicons/react/solid'
import Footer from '../components/Footer'

export default function Home({ exploreData }) {
  console.log(services);
  return (
    <div className='bg-neutral-900'>
      <Head>
        <title>Carey Patrol</title>
        <meta name="description" content="Security Patrol" />
      </Head>
      <Header />

      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-16'>
          <div className='w-12 border-b-4 border-yellow-500'>&nbsp;</div>
          <h2 className='text-2xl md:text-4xl text-gray-200 font-semibold pb-2'>Services Offered</h2>

          <div className='mt-2'>
            {/* {services.map(service => (
              <SmallCard key={service.title} service={service} />
            ))} */}
            <div className='flex flex-col mt-5'>
              <div className='mb-8'>
                  <div className='flex items-center space-x-1'>
                    <ShieldCheckIcon className='h-8 text-yellow-500' />
                    <h1 className='text-yellow-500 font-semibold text-lg mb-2'>
                        Security Guards
                    </h1>
                  </div>
                  
                  <p className='mb-2 text-gray-200'>
                    <span className='font-semibold'>Armed Guards</span> are security guards that are permitted to carry guns 
                    while deployed on duty. They are not allowed to carry and use weapons 
                    if they are not on the job. They maintain a safe and secure environment 
                    at businesses, organizations and residential properties.
                  </p>

                  <p className='mb-2 text-gray-200'>
                    <span className='font-semibold'>Unarmed Guard</span> are security guards that do not carry guns. They maintain a 
                    safe and secure environment through watchful vigilance. Their mere presence 
                    creates a deterrent to criminals. Homes, businesses, and organizations are 
                    safer with having them patrol. 
                  </p>
              </div>
       
              <div className='mb-8'>
                  <div className='flex items-center space-x-1'>
                    <TruckIcon className='h-8 text-yellow-500' />
                    <h1 className='text-yellow-500 font-semibold text-lg'>
                        Security vehicle patrol officer
                    </h1>
                  </div>
                  <p className='mb-2 text-gray-200'>
                    Security vehicle patrol officer is a specific type of security guard who provides 
                    security services in a particular location. An officer is in a security vehicle 
                    and patrols an outdoor property rather than guarding a specific building like 
                    other security guards.
                  </p>
              </div>

              <div className='mb-8'>
                  <div className='flex items-center space-x-1'>
                    <UserGroupIcon className='h-8 text-yellow-500' />
                    <h1 className='text-yellow-500 font-semibold text-lg'>
                        Bodyguards
                    </h1>
                  </div>
                  <p className='mb-2 text-gray-200'>
                    Bodyguards have a duty to protect an individual. Customers can choose to 
                    have an armed or unarmed bodyguard.  They are useful in escorting the 
                    clients in public settings. Managing large crowds. Identifying suspicious 
                    behavior or unauthorized people. Driving the client and safely fleeing the 
                    scene of a security threat. 
                  </p>
              </div>

              <div className='w-12 border-b-4 border-yellow-500'>&nbsp;</div>
              <h2 className='text-2xl md:text-4xl text-gray-200 font-semibold pb-2 mb-2'>Why Choose Us</h2>
              <p className='mb-8 text-gray-200'>
                Violent and nonviolent crimes have been on the rise since 2019. Now more than ever it 
                is pertinent to protect our businesses, homes and loved ones.  Carey patrol’s aim is 
                to provide quality meticulous service to provide our customers with a sense of peace. 
                Our officers are not only certified by the BSIS, they must also undergo vigorous 
                professional firearms and defense training programs, before being deployed.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


export async function getStaticProps () {
  try {
    const exploreData = await axios('https://links.papareact.com/pyp')
    const cardsData = await axios('https://links.papareact.com/zp1')

    return {
      props: {
        exploreData: exploreData.data,
        cardsData: cardsData.data
      }
    }
  } catch (error) {
    console.log(error)
  }
}