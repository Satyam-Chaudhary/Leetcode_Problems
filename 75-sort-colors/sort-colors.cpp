class Solution {
public:
    void sortColors(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        for(int it : nums){
            cout << it << endl;
        }
    }
};