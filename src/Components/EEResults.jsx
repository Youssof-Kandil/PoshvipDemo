import React from 'react'
import one from "../Assets/one.jpg";
import two from "../Assets/two.jpg";
import three from "../Assets/three.jpg";
import four from "../Assets/four.jpg";
import five from "../Assets/five.jpg";
import six from "../Assets/six.jpg";
import seven from "../Assets/seven.jpg";
import eight from "../Assets/eight.jpg";
import nine from "../Assets/nine.gif";
import ten from "../Assets/ten.jpg";
import eleven from "../Assets/eleven.jpg";
import oneTag from "../Assets/1.jpg"
import twoTag from "../Assets/2.jpg"
import threeTag from "../Assets/3.jpg"
import fourTag from "../Assets/4.jpg"
import fiveTag from "../Assets/5.jpg"
import sixTag from "../Assets/6.jpg"
import sevenTag from "../Assets/7.jpg"
import eightTag from "../Assets/8.jpg"
import nineTag from "../Assets/9.jpg"
import EEcard from './EEcard';


export default function EEResults() {
  return (
    <>
      <div className="cont mx-4 my-4 ">
        <div className="row gx-3 gy-3  ">
          <EEcard backgroundImage={`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 90%, #000 100%), url(${one})`} imageSrc={oneTag} day="FRI" name="Groove Club: Water Tower" location="The Water Tower" />

          <EEcard backgroundImage={`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 90%, #000 100%), url(${two})`} imageSrc={twoTag} day="SAT" name="Reggaeton Rave - Dec 2nd (21+)" location="The Brooklyn Monarch" />

          <EEcard backgroundImage={`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 90%, #000 100%), url(${three})`} imageSrc={threeTag} day="SAT" name="MORERNBPLEASE FINALE" location="Lot 45 Bushwick" />

          <EEcard backgroundImage={`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 90%, #000 100%), url(${four})`} imageSrc={fourTag} day="FRI" name="The Monster Bash" location="Viv Lavi Event Venue" />

          <EEcard backgroundImage={`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 90%, #000 100%), url(${five})`} imageSrc={fiveTag} day="SAT" name="Au5 - Bridges Between" location="The Meadows " />

          <EEcard backgroundImage={`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 90%, #000 100%), url(${six})`} imageSrc={sixTag} day="SAT" name="Vaiina & Friends" location="Rebecca's" />

          <EEcard backgroundImage={`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 90%, #000 100%), url(${seven})`} imageSrc={sevenTag} day="SAT" name="LYFE IS A PARTY" location="AM:PM Gallery" />

          <EEcard backgroundImage={`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 90%, #000 100%), url(${eight})`} imageSrc={eightTag} day="FRI" name="Synchro Bassment - Friday 12/1" location="Hart Bar" />

          <EEcard backgroundImage={`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 90%, #000 100%), url(${nine})`} imageSrc={nineTag} day="THU" name="A Night Off : Celebrating Wins with Friends" location="Cafe Erzulie" />

          <EEcard backgroundImage={`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 90%, #000 100%), url(${ten})`} imageSrc={''} day="SAT" name="Friendsgiving" location="The Rooftop" />

          <EEcard backgroundImage={`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 90%, #000 100%), url(${eleven})`} imageSrc={''} day="SAT" name="Sol Pop Movie Night" location="Eurekas" />


        </div>
      </div>
    </>
  );
}