# top-3-words

In this project, we have three types of solutions

1) Using Nodejs and regex, we count all words and sort them by count

2) Using Nodejs and stream API, we read text from file and find top 3 words

3) For very large datasets, we can have cluster of hadoop servers and run the process on cluster

other solutions
1) It can be done by running multiple nodes (Nodejs or GoLang etc) and shared redis for comminicution between nodes and each node is responsible for parts of data to be counted. The cordination can be done with single or multiple node by voting and selecting the cordinator

2) We can use Kafka and stream processing API or multiple consumer to count top words

3) We can use a database for couning and reading data from file and then sort by count on DB# top-3-words

