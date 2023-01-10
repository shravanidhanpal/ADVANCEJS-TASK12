class student{
    constructor(name,age,phonenumber,marks){
        this.name=name;
        this.age=age;
        this.phonenumber=phonenumber;
        this.marks=marks;
    }
    isEligible(minAge) {
        return (minMarks) => {
          if (this.marks > minMarks && this.age > minAge) {
            console.log(this.name + " is eligible for placements");
          } else {
            console.log(this.name + " is not eligible for placements");
          }
        };
    }
}
const st1=new student('sony',19,9998586354,40);
const st2=new student('sneha',22,9897544688,52);
const st3=new student('shravani',17,9863245216,42);
const st4=new student('nikki',21,8536452158,40);
const st5=new student('prathyusha',21,7863984523,65);
st1.isEligible(18)(40);
st2.isEligible(18)(40);
st3.isEligible(18)(40);
st4.isEligible(18)(40);
st5.isEligible(18)(40);