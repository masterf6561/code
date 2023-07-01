# read n
# sum=0
# for ((i=0;i<$n;i++))
# do
#     read temp
#     sum=$(($sum+$temp))
# done
# printf "%.3f\n" $(bc -l <<< "$sum/$n")

read n

x=0
for i in $(seq $n)
do
read c
x=$((x + c))
done

printf "%.3f" $(echo "$x / $n" | bc -l)