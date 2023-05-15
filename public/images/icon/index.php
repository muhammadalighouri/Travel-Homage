<?php include("header.php"); ?>

<?php
$t=time();
$totalInvest = $t*0.00020; ?>

<div class="presale_section">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-12 m-auto">
                <h2 class="text-white">Dashboard</h2>
                
                 <div class="pre_inner p-4">
                    <div class="outer_start">
                        <div class="inner_one"> 
                           Total Value Locked
                       </div>
                       <div class="inner_two">
                        <h3><span ><?php echo $totalInvest; ?></span> BNB</h3>
                    </div>
                </div>
                <div class="outer_start">
                    <div class="inner_one"> 
                        Investment Balance
                    </div>
                    <div class="inner_two">
                        <h3><span id="totalInvesment">0</span> BNB</h3>
                    </div>
                </div>
                <!--<div class="outer_start">-->
                <!--    <div class="inner_one"> -->
                <!--       Your Miners-->
                <!--   </div>-->
                <!--   <div class="inner_two">-->
                <!--    <h3><span id="rewardPercentage"></span>0 MINERS</h3>-->
                <!--    </div>-->
                <!--</div>-->
            <div class="stake_section p-0">  
                <div class="wall mt-3 mb-3"> 
                    <input type="number" id="enterAmount" class="main_bnb" placeholder="Enter BNB Amount" min="0">
                </div>
            </div>
            <div id="messageBox" style="display:none;">
                        <div id="message" class="alert alert-danger text-center"></div>
            </div>
            <div class="unloack mt-4">
                <button href="javascript:void(0);" onclick="stake()" id="stakeBtn"> Stake </button>
            </div>
            <div class="outer_start pt-3">
                <div class="inner_one"> 
                   Total BNB Earned
               </div>
               <div class="inner_two">
                <h3><span id="totalRewards">0</span> BNB</h3>
            </div>
        </div>
        <div class="unloack mt-2">
            <button href="javascript:void(0);" onclick="reinvest()" id="stakeBtn"> Re-Stake </button>
        </div>
         <div class="unloack mt-3">
            <button href="javascript:void(0);" onclick="withdrawAmount()" id="stakeBtn"> Withdraw </button>
        </div>

    </div>
                
                
                
                <div class="row mt-5">
    <div class="col-md-12">
        <div class="Invite">
            <h2 class="text-white Statis"> Statistics </h2>
            <div class="row">
                <div class="col-md-12">
                    <div class="incomed d-flex"> 
                     <h6>Daily ROI</h6>
                     <h6 id="roi">0%</h6> 
                 </div>
                 <div class="incomed d-flex"> 
                     <h6>APY</h6>
                     <h6 id="apr">0%</h6> 
                 </div>
                 <!--<div class="incomed d-flex"> -->
                 <!--    <h6>Dev Fee</h6>-->
                 <!--    <h6 id="depositeTax">0%</h6>-->
                 <!--</div>  -->
             </div>
         </div>
     </div>
 </div>



</div>



               




    <!-- <div class="row">
        <div class="col-md-6 mt-5">
            <div class="capital">
                <h1>Capital</h1>
                <h4 id="totalInvestment">0.000</h4>
                <h6>Value</h6>
                <button class="myBtn" data-bs-toggle="modal" data-bs-target="#exampleModaling" onclick="getStakeDetails(1)">
                    Withdraw Capital
                </button>
            </div>
        </div>
        <div class="col-md-6 mt-5">
            <div class="capital">
                <h1>Rewards</h1>
                <h4 id="totalRewards">0.000</h4>
                <h6>Value</h6>
                <button class="myBtn_one" data-bs-toggle="modal" data-bs-target="#exampleModaling" onclick="getStakeDetails(2)">
                    Compound
                </button>
                <button class="myBtn_one" data-bs-toggle="modal" data-bs-target="#exampleModaling" onclick="getStakeDetails(0)">
                    Withdraw
                </button>
            </div>
        </div>
    </div> -->
    <div class="row mt-5">
        <div class="col-md-12">
            <div class="Invite">
                <h3>Invite Your Friends and Earn Together</h3>
                <p>Earn a <span id="refferralPercentage">0</span>% commission of the BNB Staked for your friends</p>
                <h4>My Referral Link</h4>
                <div class="input_copy">
                    <form method="post" action="">
                        <input type="text" id="link" name="link" value="">
                        <button type="button" onclick="copy()">Copy</button>
                    </form>
                </div>
                <div class="row Friends"> 
                    <div class="col-md-6">
                        <h5>Total Earned</h5>
                        <h6><span id="totalEarn">0</span> BNB</h6>
                    </div>
                    <div class="col-md-6">
                        <h5>Claimable</h5>
                        <h6 style="color:#3FFF69"><span id="availableRewards">0</span> BNB</h6>
                    </div>
                </div>
                <button class="claim_btn" type="button" onClick="claimRefferralRewards()">Claim</button>
            </div>
        </div> 
    </div>


    <div class="row mt-5">
        <div class="col-md-12">
            <div class="Invite">
                <div class="row">
                    <div class="col-md-6">
                        <div class="predictable"> 
                         <img src="assets/img/1.png" width="50px">
                         <h6>Earn a predictable income</h6>
                     </div>
                 </div>
                 <div class="col-md-6"> 
                    <div class="predictable"> 
                     <img src="assets/img/3.png" width="50px">
                     <h6>Confidence while investing</h6>
                 </div>
             </div>
             <div class="col-md-6"> 
                <div class="predictable"> 
                 <img src="assets/img/4.png" width="50px">
                 <h6>Win in the bear market</h6>
             </div>
         </div>
         <div class="col-md-6"> 
            <div class="predictable"> 
             <img src="assets/img/2.png" width="50px">
             <h6>Save your valuable time</h6>
         </div>
     </div> 
 </div>
</div>
</div>
</div>

<div class="pre_inner mt-5">
                    <h1 class="text-white">Calculator</h1>
                    <div class="outer_start">
                        <div class="inner_one">
                            <img src="assets/img/BNB.png" alt="" class="" width="50px">
                            Staking BNB
                        </div>
                        <div class="inner_two">
                            <h3><span id="rewardPercentage"></span>% APY</h3>
                        </div>
                    </div>
                    <div class="stake_section">
                        <h3 class="mt-3">Stake BNB tokens and earn stable APY</h3>

                        <div class="wall">
                            <!--<h6>MAX</h6>-->
                            <input type="hidden" id="busdAmount" class="main_bnb" placeholder="BNB Amount" min="0" oninput="inputValue()" value="1000">
                        </div>
                    </div>

                    <div class="amount_section">
                        <div class="row">
                            <div class="col-md-6">
                                <h6 class="">Amount</h6>
                                <div class="navecation amount">
                                    <ul>
                                        <li><a class="menu active" href="javascript:void(0);" onclick="investAmount(1000)">1K |</a></li>
                                        <li><a class="menu" href="javascript:void(0);" onclick="investAmount(2000)">5k |</a></li>
                                        <li><a class="menu" href="javascript:void(0);" onclick="investAmount(10000)">10k |</a></li>
                                        <li><a class="menu" href="javascript:void(0);" onclick="investAmount(100000)">100K |</a></li>
                                        <li><a class="menu" href="javascript:void(0);" onclick="investAmount(250000)">250k </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h6 class="">Time for</h6>
                                <div class="navecation month">
                                    <ul>
                                        <li><a class="menu active" href="javascript:void(0);" onclick="investMonth(3)">3M |</a></li>
                                        <li><a class="menu" href="javascript:void(0);" onclick="investMonth(6)">6M |</a></li>
                                        <li><a class="menu" href="javascript:void(0);" onclick="investMonth(9)">9M |</a></li>
                                        <li><a class="menu" href="javascript:void(0);" onclick="investMonth(12)">1Y |</a></li>
                                        <li><a class="menu" href="javascript:void(0);" onclick="investMonth(24)">2Y </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <ul class="mainlist">
                                    <li class="listone">
                                        <label>Monthly Income</label>
                                        <span class="badges"> <span id="income">0.00</span> BNB </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-12">
                                <ul class="mainlist">
                                    <li class="listone">
                                        <label>Weekly Income</label>
                                        <span class="badges"> <span id="weekIncome">0.00</span> BNB </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-12">
                                <ul class="mainlist">
                                    <li class="listone">
                                        <label>Daily Income</label>
                                        <span class="badges"> <span id="dayIncome">0.00</span> BNB </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   <!--  <div class="unloack mt-4">
                        <button href="javascript:void(0);" onclick="stake()" id="stakeBtn"> Stake Now </button>
                    </div> -->

                </div>


</div>
</div>

<div class="container footer mt-5">
    <div class="row">
        <div class="col-lg-3 col-md-12">
            <h3>Royal Stake</h3>
            <p>Join the most user oriented Staking platform and
                generate a predictable income on your crypto
                assets. Keep calm, no matter if crypto prices
                rise or fall.
            </p>
        </div>
        <div class="col-lg-3 col-md-4">
            <h3>COMING SOON</h3>
            <a href="#"><img src="assets/img/app.png"> </a>
            <a href="#">
                <img src="assets/img/google.png">
            </a>
        </div>
        <div class="col-lg-3 col-md-4">
            <h3>CONTACT US</h3>
            <h5>Email</h5>
            <h6><a href="mailto:Support@Royalstake.app"> support@royalstake.app </a></h6>
        </div>
        <div class="col-lg-3 col-md-4">
            <h3>SOCAIL MEDIA</h3>
            <div class="footer_links"> 
                <a href="#" class=""><i class="fab fa-twitter"></i></a>
                <a href="#" class=""><i class="fab fa-instagram"></i></a>
                <a href="#" class=""><i class="fas fa-paper-plane"></i></a>
            </div>
        </div>
    </div>
    <div class="row text-center text-white mt-5">
        <p>Copyright © 2022 RoyalStake, All Rights Reserved.</p>
    </div>
</div>

</div>


<div class="modal fade" id="exampleModaling" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered tab_classed">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Investment Details </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="capital_table">
            <table> 
                <thead>
                    <tr>
                        <th>SR.No</th>
                        <th>Invest Amount</th>
                        <th>Reward</th>
                        <th>Invest Date</th>
                        <th>End Month Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody  id="stakes">
                   <tr>
                    <td colspan="6">No Data Found!</td>
                </tr>
            </tbody> 
        </table>
    </div>
</div> 
</div>
</div>
</div>


<?php include("footer.php"); ?>
<script>

    // copy text
    const copy = () => {         
       if(connectedAccount != null){
           let link = document.getElementById("link");
           link.select();
           document.execCommand('copy');
           // This is just personal preference.
           // I prefer to not show the whole text area selected.
           link.focus();
           Swal.fire({icon:"success",text:"Link Copied!"});
       }
   }

   const calculate = async () => {
    if(months > 0 && totalAmount > 0){
        let curentDate = Number(Math.floor(new Date().getTime() / 1000));
        var current = new Date();
        current.setMonth(current.getMonth()+Number(months));
        
        let rewardPerD = rewardPercentage / 365;
        let rewardPerW = rewardPercentage / 52;
        let rewardPerM = rewardPercentage / 12;
        
        let rewardW = ( (Number(totalAmount) * rewardPerW * Number(604800)) / 86400) / 100;
        let rewardD = ( (Number(totalAmount) * rewardPerD * Number(86400)) / 86400) / 100;
        
        let timeStamp = Number(Math.floor(current.getTime()/1000) - curentDate);
        console.log(timeStamp);
        let reward = ( (Number(totalAmount) * rewardPerM * Number(86400 * 30)) / 86400) / 100;
            // let reward = ((((Number(totalAmount) * rewardPercentage) * Number(timeStamp)) / Number(84600))/100)/ 1e18;
            document.getElementById("income").innerHTML = Number(reward).toFixed(6);
            document.getElementById("weekIncome").innerHTML = Number(rewardW).toFixed(6);
            document.getElementById("dayIncome").innerHTML = Number(rewardD).toFixed(6);
            // document.getElementById("tokens").innerHTML = Number(reward).toFixed(6);
        }else{
            document.getElementById("income").innerHTML = Number(0);
            // document.getElementById("tokens").innerHTML = Number(0);
        }
    }    

    const investAmount = async (amount) => {
        totalAmount = amount;
        document.getElementById("busdAmount").value = totalAmount;
        calculate();
        
        if(connectedAccount != null && provider != null){
            tokenBalance = Number(await web3.eth.getBalance(connectedAccount)) / 1e18;
            if(tokenBalance < totalAmount){
                // document.getElementById("messageBox").style.display = "none";
                // document.getElementById("stakeBtn").removeAttribute("disabled");
            }else{
                document.getElementById("busdAmount").value = amount;
                document.getElementById("messageBox").style.display = "none";
                document.getElementById("stakeBtn").removeAttribute("disabled");
            }
        }        
        
    }
    
    
    setTimeout(()=>{
        investAmount(totalAmount);
    },1500)
    
    const investMonth = async (month) => {
        months = month;
        calculate();
    }
    

    
    const inputValue = () => {
        totalAmount = document.getElementById("busdAmount").value;
        document.getElementById("messageBox").style.display = "none";
        document.getElementById("stakeBtn").removeAttribute("disabled");
        calculate();
    }
    
    
    // GET REFFERAL REWARDS
    
    const claimRefferralRewards = async () => {
        if(connectedAccount != null && provider != null){
            try{
                document.getElementById("loadingdiv").style.display = "block";
                let res = await stakeContract.methods.claimRefferalRewards().send({from:connectedAccount});
                document.getElementById("loadingdiv").style.display = "none";
                Swal.fire({icon:"success",text:"You are successfully Claim your rewards"}).then(res => {
                    window.location.reload();
                });

            }catch(err){
                document.getElementById("loadingdiv").style.display = "none";
                console.log(err);
                Swal.fire({icon:"error",text:err.message});
            }
        }else{
            Swal.fire({icon:"warning",text:"Please connect your wallet"});
        }        
    }
    
    // GET USER STAKE DETAILS
    const getStakeDetails = async (type) => {
        // getUserDepositeIds

        if(connectedAccount != null && provider != null){

            // await stakeContract.methods.getUserDepositeIds(connectedAccount).call().then(async (totalDeposit) => {
            //     let i = 0;
            //     let  j = 1;
            //     let flag = 0;
            //     let html = "";
            //     let totalInvestment = 0;
            //     let totalRewards = 0;
            //     if(totalDeposit.length<=0){
            //         document.getElementById("stakes").innerHTML = `<tr><td colspan="6">No Data Found!</td></tr>`;
            //     }else{
            //         document.getElementById("stakes").innerHTML = "";
            //     }
            //     while(i<totalDeposit.length){
            //         await stakeContract.methods.Stack(totalDeposit[i]).call().then(async (data) => {
            //             console.log(data);
            //             let rewards = Number(await stakeContract.methods.calclulateReward(totalDeposit[i]).call()) / 10 ** Number(await tokenContract.methods.decimals().call());
            //             let time = new Date(Number(data.time)*1000);
            //             let withdrawTime = new Date(Number(data.withdrawTime)*1000);
            //             let currentTime = Math.floor(Number(new Date().getTime())/1000);
            //             let date = time.getDate();
            //             let month = time.getMonth()+1;
            //             let year = time.getFullYear();
                        
            //             let wdate = withdrawTime.getDate();
            //             let wmonth = withdrawTime.getMonth()+1;
            //             let wyear = withdrawTime.getFullYear();
            //             console.log(currentTime);
            //             console.log(data.withdrawTime);
            //             if(data.isWithdrawal == false){
            //                 flag=1;
            //                 totalInvestment += Number(Number(data.amount) / 10 ** Number(await tokenContract.methods.decimals().call()));
            //                 totalRewards += rewards;
            //                 let html =`
            //                 <tr>
            //                 <td>${j++}</td>
            //                 <td>${Number(data.amount) / 10 ** Number(await tokenContract.methods.decimals().call())}</td>
            //                 <td>${rewards.toFixed(18)}</td>
            //                 <td>${date +'-'+month+'-'+year}</td>
            //                 <td>${wdate +'-'+wmonth+'-'+wyear}</td>
            //                 <td>
            //                 ${type == 0 ? `<button class="but_ton mb-2" data-bs-dismiss="modal" aria-label="Close" onclick="withdrawReawards(${data.stackId})">Claim Reward</button>` : '' }
            //                 ${type == 1 ? `<button class="but_ton" data-bs-dismiss="modal" aria-label="Close" onclick="withdrawAmount(${data.stackId})">Withdraw Amount</button>` : '' }
            //                 ${type == 2 ? `<button class="but_ton" data-bs-dismiss="modal" aria-label="Close" onclick="reinvest(${data.stackId})">Compound</button>` : '' }
            //                 </td>
            //                 </tr>                            
            //                 `;
            //                 document.getElementById("stakes").innerHTML += html;
            //             }
            //             clearInterval(myInterval);
            //             i++;
            //         }).catch(console.log);
            //     }
            //     if(flag == 0){
            //         document.getElementById("stakes").innerHTML = `<tr><td colspan="6">No Data Found!</td></tr>`;
            //     }
            //     document.getElementById("totalInvestment").innerHTML = Number(totalInvestment).toFixed(5);
            //     document.getElementById("totalRewards").innerHTML = Number(totalRewards).toFixed(5);
            // }).catch(console.log)
        }     
    }    
    
    const stake = async () => {
        document.getElementById("messageBox").style.display = "none";
        document.getElementById("stakeBtn").removeAttribute("disabled");
        document.getElementById("message").innerText = "";
        if(connectedAccount != null && provider != null){
            let value = document.getElementById("enterAmount").value;    
            tokenBalance = Number(await web3.eth.getBalance(connectedAccount)) / 1e18;
            console.log(tokenBalance);
            if(Number(value)>0){

                if(Number(value)<minimumAmount || Number(value)>maximumAmount){
                    document.getElementById("messageBox").style.display = "block";
                    document.getElementById("message").innerText = `Amount must be more then equal to ${minimumAmount} and Less then ${maximumAmount}`;
                    // document.getElementById("stakeBtn").setAttribute("disabled","disabled");     
                    return;
                }
                
                if(Number(value) > tokenBalance) {
                    document.getElementById("messageBox").style.display = "block";
                    document.getElementById("message").innerText = "Insufficient balance";
                    // document.getElementById("stakeBtn").setAttribute("disabled","disabled");     
                    return;
                }
                
                if(months == 0){
                    Swal.fire({icon:"warning",text:"Please select Months"});
                    return;
                }
                
                // GET MONTHS TIMESTAMP
                var current = new Date();
                current.setMonth(current.getMonth()+Number(months));
                let timeStamp = Math.floor(current.getTime()/1000);
                console.log(timeStamp);
                try{
                    document.getElementById("loadingdiv").style.display = "block";
                    // STAKE AMOUNT
                    let address = '<?php echo $_GET['address']; ?>';
                    if(address == ""){
                        address = connectedAccount;
                    }
                    let etherValue = await web3.utils.toWei(value.toString(),'ether');
                    let res = await stakeContract.methods.invest(address).send({from:connectedAccount,value:etherValue.toString()});
                    document.getElementById("loadingdiv").style.display = "none";
                    Swal.fire({icon:"success",text:"You are successfully Stake Tokens"}).then(res => {
                        window.location.reload();
                    });
                    
                }catch(err){
                    document.getElementById("loadingdiv").style.display = "none";
                    console.log(err);
                    Swal.fire({icon:"error",text:err.message});
                }
                
            }else{
                document.getElementById("messageBox").style.display = "block";
                document.getElementById("message").innerText = "Invalid Amount";
                
            }
        }else{
            Swal.fire({icon:"warning",text:"Please connect your wallet"});
        }
    }
    
    const withdrawReawards = async (id) => {
        if(connectedAccount != null && provider != null){
            try{
                document.getElementById("loadingdiv").style.display = "block";
                $('#exampleModaling').modal('hide');
                let res = await stakeContract.methods.withdrawReward(id).send({from:connectedAccount});
                document.getElementById("loadingdiv").style.display = "none";
                Swal.fire({icon:"success",text:"You are claim your rewards successfully"}).then(res => {
                    window.location.reload();
                });
            }catch(err){
                document.getElementById("loadingdiv").style.display = "none";
                console.log(err);
                Swal.fire({icon:"error",text:err.message});
            }

        }else{
            Swal.fire({icon:"warning",text:"Please connect your wallet"});
        }
    }    
    
    const withdrawAmount = async () => {
        if(connectedAccount != null && provider != null){
            if(totalUserDeposite>0){
                
                try{
                    document.getElementById("loadingdiv").style.display = "block";
                    let res = await stakeContract.methods.withdrawTokens().send({from:connectedAccount});
                    document.getElementById("loadingdiv").style.display = "none";
                    Swal.fire({icon:"success",text:"You are withdraw your token successfully"}).then(res => {
                        window.location.reload();
                    });
                }catch(err){
                    document.getElementById("loadingdiv").style.display = "none";
                    console.log(err);
                    Swal.fire({icon:"error",text:err.message});
                }
            }else{
                Swal.fire({icon:"warning",text:"Your dont have any stake"});
            }

        }else{
            Swal.fire({icon:"warning",text:"Please connect your wallet"});
        }        
    }
    
    const reinvest = async (id) => {
        if(connectedAccount != null && provider != null){
            try{
                document.getElementById("loadingdiv").style.display = "block";
                $('#exampleModaling').modal('hide');
                let res = await stakeContract.methods.reinvest().send({from:connectedAccount});
                document.getElementById("loadingdiv").style.display = "none";
                Swal.fire({icon:"success",text:"Your rewards stake successfully"}).then(res => {
                    window.location.reload();
                });
            }catch(err){
                document.getElementById("loadingdiv").style.display = "none";
                console.log(err);
                Swal.fire({icon:"error",text:err.message});
            }

        }else{
            Swal.fire({icon:"warning",text:"Please connect your wallet"});
        }        
    }

    
    const myInterval = setInterval(getStakeDetails, 1000);
    
    
</script>


