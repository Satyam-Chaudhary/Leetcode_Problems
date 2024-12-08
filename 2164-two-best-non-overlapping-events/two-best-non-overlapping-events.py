class Solution:
    def maxTwoEvents(self, events: List[List[int]]) -> int:
        events.sort(key=lambda x: x[1])

        max_value_so_far = 0
        max_sum = 0

        end_times = []
        values = []

        for start, end, value in events:
            idx = bisect_right(end_times, start - 1) - 1

            if idx >= 0:
                max_sum = max(max_sum, values[idx] + value)
            else:
                max_sum = max(max_sum, value)

            max_value_so_far = max(max_value_so_far, value)
            end_times.append(end)
            values.append(max_value_so_far)

        return max_sum
