class Solution {
public:

    void printVector(const vector<int>& nums) {
        for(int it : nums) {
            cout << it;
        }
    }
    
    void nextPermutation(vector<int>& nums) {
        int index = -1;
        int n = nums.size();
        for(int i = n-2; i >= 0; i--){
            if(nums[i] < nums[i+1]){
                index = i;
                break;
            }
        }
        //cout << index << endl;

        if(index == -1){
            reverse(nums.begin(), nums.end());
            printVector(nums);
            return;
        }

        for(int i = n-1; i > index; i--){
            if(nums[index] < nums[i]){
                swap(nums[i], nums[index]);
                break;
            }
        }

        reverse(nums.begin() + index + 1, nums.end());
        printVector(nums);
    }
};