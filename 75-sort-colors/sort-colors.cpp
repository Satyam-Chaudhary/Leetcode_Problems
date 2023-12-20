class Solution {
public:
    void sortColors(vector<int>& nums) {
        // int count0 = 0, count1 = 0, count2 = 0;
        // for(int i = 0 ; i < nums.size() ;i++){
        //     if(nums[i] == 0) count0++;
        //     if(nums[i] == 1) count1++;
        //     if(nums[i] == 2) count2++;
        // }

        // for(int i = 0; i < count0; i++){
        //     nums[i] = 0;
        // }
        // for(int i = count0; i < count0 + count1; i++){
        //     nums[i] = 1;
        // }
        // for(int i = count0 + count1; i < nums.size(); i++){
        //     nums[i] = 2;
        // }

        // for(auto it : nums){
        //     cout << it << endl;
        // }

        int low = 0, mid = 0 , high = nums.size() - 1;
        while(mid <= high){
            if(nums[mid] == 0){
                swap(nums[low], nums[mid]);
                mid++;
                low++;
            }
            else if(nums[mid] == 1){
                mid++;
            }
            else{
                swap(nums[mid], nums[high]);
                high--;
            }
        }
        for(auto it : nums){
            cout << it << endl;
        }

    }
};