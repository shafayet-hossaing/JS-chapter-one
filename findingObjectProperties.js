// Try array and object values access
// To Know more about it check first-chapter (09) page(76)

const arrObj = [
    "mark",
    {
        firstName: "Handy",
        LastName: "Harry",
        friends: ["Dhaka",{
            friendsNames: [{
                name: "JavaScript",
                myFriends:{
                    arrayNames: [
                        "Mister Noddles",{
                            testy: "Yes", newObj: {
                                stage: "First stage completed",
                                arrayInObj: [{
                                    statement: "Cholo boho dur", nesObg: {
                                        feelings: "Boring?", okayObj: {
                                            needMore: ["Akhono onk dur", {
                                                moreNesObj: {world:"looking for you", moreArr:[
                                                    {
                                                        stagePosition: "You are in the middle",
                                                        boring:["well playing",
                                                        {
                                                            but: "try more", fail:{
                                                                ifYes:["then","nothing to","say"],ifNot:{
                                                                    letsGoMore:"You're in track",lastArr:[
                                                                        "Tired?",{
                                                                            oneMoreStep:{
                                                                                lastObj:{
                                                                                    myFunc: function sum(){
                                                                                        let result = 0
                                                                                        for(const element of arguments){
                                                                                            result += element
                                                                                        }
                                                                                        return result
                                                                                    }
                                                                                }
                                                                            } 
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        }
                                                    ]
                                                    }
                                                ]}
                                            }]
                                        }
                                    }
                                }]
                            }
                        }
                    ]
                }
            }]
        }]
    }
]


console.log(arrObj[1].friends[1].friendsNames[0].myFriends.arrayNames[1].newObj.arrayInObj[0].nesObg.okayObj.needMore[1].moreNesObj.moreArr[0].boring[1].fail.ifNot.lastArr[1].oneMoreStep.lastObj.myFunc(5,6,100,650));

