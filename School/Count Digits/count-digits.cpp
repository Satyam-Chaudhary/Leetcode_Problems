//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std;

// } Driver Code Ends
class Solution{
public:
    int evenlyDivides(int n){
        //code here
       int count = 0;
	int dub = n;
	int ld;
	while(dub != 0){
		ld = dub % 10;
		dub = dub / 10;
				if(ld == 0){
					continue;
				}
                else if(n % ld == 0) {
                  count++;
                }
        }
	return count;
    }
};

//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int N;
        cin>>N;
        Solution ob;
        cout << ob.evenlyDivides(N) << endl;
    }
    return 0; 
}
// } Driver Code Ends