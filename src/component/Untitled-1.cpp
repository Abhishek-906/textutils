#include<iostream>
using namespace std ;

int main(){
    int num ;
     cout<<"Enter Random Number"<<endl;
     cin>>num ;

     int ans = (((num*4)+8)/2*45+23)/10;

     if(ans==num){
        cout<<"Winner Winner Chicken Dinner";
     }else{
        cout<<"OOPS , Beter luck next time"<< ans;
        
     }
    return 0 ;
}