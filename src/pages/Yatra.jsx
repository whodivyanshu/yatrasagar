
import React,{ useState } from "react";
import styles from './yatra.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Lora } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Drop from './yatraImages/dropdown.svg';

import Link from 'next/link';
const loraBold = Lora({
    weight: "700",
    subsets: ["latin"],
});
const data=[[
    "kedarnath",
    'A Soul Stirring Journey to Kedarnath',
    'The Sacred River Ganga Flows Gracefully',
    'The Opening Date and Time of Kedarnath Temple',
    'Things to carry in Kedarnath Trekking Trips',
    'Majestic Himalayas Meet the Sky',
    'The Sacred River Ganga Flows Gracefully'
],
[
    "goldenTemple",
    'A Soul Stirring Journey to Kedarnath',
    'The Sacred River Ganga Flows Gracefully',
    'The Opening Date and Time of Kedarnath Temple',
    'Things to carry in Kedarnath Trekking Trips',
    'Majestic Himalayas Meet the Sky',
    'The Sacred River Ganga Flows Gracefully'
],[
    "shantiStupa",
    'A Soul Stirring Journey to Kedarnath',
    'The Sacred River Ganga Flows Gracefully',
    'The Opening Date and Time of Kedarnath Temple',
    'Things to carry in Kedarnath Trekking Trips',
    'Majestic Himalayas Meet the Sky',
    'The Sacred River Ganga Flows Gracefully'
],[
    "meenakshiTemple",
    'A Soul Stirring Journey to Kedarnath',
    'The Sacred River Ganga Flows Gracefully',
    'The Opening Date and Time of Kedarnath Temple',
    'Things to carry in Kedarnath Trekking Trips',
    'Majestic Himalayas Meet the Sky',
    'The Sacred River Ganga Flows Gracefully'
]
]
const images=[[
    'https://drive.google.com/uc?export=view&id=17Jl1gDlrNiAk9KRsk6wXEPK8Sf4EfyH2',
    'https://drive.google.com/uc?export=view&id=1Pjs8T4GpExn6zTEd_aHN3fbyQ45pc1MN',
    'https://drive.google.com/uc?export=view&id=1qpYrznTM1cEghiv2jkoIKY9y7II1BBCO',
    'https://drive.google.com/uc?export=view&id=1-ikRYmMGD5QAW8VvVbMutmNtSB9O7pjR',
    'https://drive.google.com/uc?export=view&id=11_KvCcvKiLkgUebgqxNULE8MhC_VJIlw',
    'https://drive.google.com/uc?export=view&id=1jj2Xb1GPdcBKNHNgZucaKcbfWEuaff3F',
    'https://drive.google.com/uc?export=view&id=1C1oKbUvjp9Civ6RtMSLhCOXzWpD5jlZG'
],[
    'https://drive.google.com/uc?export=view&id=1LQmj_4Fmr0eXlb-oVjJENCi8kAjTKst9',
    'https://drive.google.com/uc?export=view&id=1Pjs8T4GpExn6zTEd_aHN3fbyQ45pc1MN',
    'https://drive.google.com/uc?export=view&id=1qpYrznTM1cEghiv2jkoIKY9y7II1BBCO',
    'https://drive.google.com/uc?export=view&id=1-ikRYmMGD5QAW8VvVbMutmNtSB9O7pjR',
    'https://drive.google.com/uc?export=view&id=11_KvCcvKiLkgUebgqxNULE8MhC_VJIlw',
    'https://drive.google.com/uc?export=view&id=1jj2Xb1GPdcBKNHNgZucaKcbfWEuaff3F',
    'https://drive.google.com/uc?export=view&id=1C1oKbUvjp9Civ6RtMSLhCOXzWpD5jlZG'
],[
    'https://drive.google.com/uc?export=view&id=1Oet6BYJzNwFJ9rJTWLG5LJW2-yvLDlCa',
    'https://drive.google.com/uc?export=view&id=1Pjs8T4GpExn6zTEd_aHN3fbyQ45pc1MN',
    'https://drive.google.com/uc?export=view&id=1qpYrznTM1cEghiv2jkoIKY9y7II1BBCO',
    'https://drive.google.com/uc?export=view&id=1-ikRYmMGD5QAW8VvVbMutmNtSB9O7pjR',
    'https://drive.google.com/uc?export=view&id=11_KvCcvKiLkgUebgqxNULE8MhC_VJIlw',
    'https://drive.google.com/uc?export=view&id=1jj2Xb1GPdcBKNHNgZucaKcbfWEuaff3F',
    'https://drive.google.com/uc?export=view&id=1C1oKbUvjp9Civ6RtMSLhCOXzWpD5jlZG'
],[
    'https://drive.google.com/uc?export=view&id=127ujzOrEgVv3SIhowDMpYLLFgeEz0s3c',
    'https://drive.google.com/uc?export=view&id=1Pjs8T4GpExn6zTEd_aHN3fbyQ45pc1MN',
    'https://drive.google.com/uc?export=view&id=1qpYrznTM1cEghiv2jkoIKY9y7II1BBCO',
    'https://drive.google.com/uc?export=view&id=1-ikRYmMGD5QAW8VvVbMutmNtSB9O7pjR',
    'https://drive.google.com/uc?export=view&id=11_KvCcvKiLkgUebgqxNULE8MhC_VJIlw',
    'https://drive.google.com/uc?export=view&id=1jj2Xb1GPdcBKNHNgZucaKcbfWEuaff3F',
    'https://drive.google.com/uc?export=view&id=1C1oKbUvjp9Civ6RtMSLhCOXzWpD5jlZG'
]]
const Yatra=()=>{
    const router=useRouter();
    const currentdate= new Date();
    const {Index}=router.query;
    const [guest,setGuest]=useState('2 adults');
    const month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const getDates=(ahead)=>{
        const newDate= new Date();
        newDate.setDate(currentdate.getDate()+ahead);
        return(
            newDate.getDate()+' '+month[newDate.getMonth()]+' '+newDate.getFullYear()
            )
    }
    const [date,setDate]=useState(getDates(1));
    const [room,setRoom]=useState('silver');
    
    return(
        <>
            <Navbar/>
            <div  className={styles.flexDiv}>
                <div className={[styles.sixty, styles.topLeft].join(' ')}>
                    <br />
                    <br />
                    <h1 id={styles.topText} style={loraBold.style}>{Index?data[Index][1]:data[0][1]}</h1>
                    <p>The majestic mountains echo with tales of devotion and nature's awe-inspiring beauty</p>
                    <div id={styles.booking} className={styles.flexDiv}>
                        <div>
                        <p>Guest</p> 
                        <Dropdown>
                          <DropdownTrigger>
                            <Button className={styles.button}
                              variant="bordered" 
                            >
                              {guest}
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu aria-label="Action event example" onAction={(key) => setGuest(key)}>
                            <DropdownItem key="2 adults with children">2 adults with children</DropdownItem>
                            <DropdownItem key="2 adults">2 adults</DropdownItem>
                            <DropdownItem key="1 adult with children">1 adult with children</DropdownItem>
                            <DropdownItem key="1 adult">1 adult</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                        </div>
                        <div>
                        <p>Room</p> 
                        <Dropdown>
                          <DropdownTrigger>
                            <Button className={styles.button}
                              variant="bordered" 
                            >
                              {room} 
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu aria-label="Action event example" onAction={(key) => setRoom(key)}>
                            <DropdownItem key="platinum">platinum</DropdownItem>
                            <DropdownItem key="gold">gold</DropdownItem>
                            <DropdownItem key="silver">silver</DropdownItem>
                            <DropdownItem key="bronze">bronze</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                        </div>
                        <div>
                        <p>Date</p> 
                        <Dropdown>
                          <DropdownTrigger>
                            <Button className={styles.button}
                              variant="bordered" 
                            >
                              {date} 
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu aria-label="Action event example" onAction={(key) => setDate(key)}>
                            <DropdownItem key={getDates(1)}>{getDates(1)}</DropdownItem>
                            <DropdownItem key={getDates(2)}>{getDates(2)}</DropdownItem>
                            <DropdownItem key={getDates(3)}>{getDates(3)}</DropdownItem>
                            <DropdownItem key={getDates(4)}>{getDates(4)}</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                        </div>
                        <div id={styles.bookbutton}><Link href={'https://google.com'}>Book Now</Link></div>
                    </div>
                </div>
                <div className={[styles.flexRight, styles.forty, styles.topImage].join(" ")} style={{backgroundImage:'url("'+(Index?images[Index][0]:images[0][0])+'")'}}>
                </div>
                
            </div>
            <div className={styles.flexDiv}>
                <div></div>
                <div className={styles.flexRight}></div>
            </div>
            <div className={styles.flexDiv}>
                <div></div>
                <div className={styles.flexRight}></div>
            </div>
            <div className={styles.flexDiv}>
                <div></div>
                <div className={styles.flexRight}></div>
            </div>
            <div className={styles.flexDiv}>
                <div></div>
                <div className={styles.flexRight}></div>
            </div>
            <div className={styles.flexDiv}>
                <div></div>
                <div className={styles.flexRight}></div>
            </div>
            <div className={styles.flexDiv}>
                <div></div>
                <div className={styles.flexRight}></div>
            </div>

        </>
    )
}

export default Yatra;