<html>

<head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
</head>

<body>
    <div class="news-view view">
        {% for item in list %}
        <div class="item">
            <a href="https://cnodejs.org/topic/{{ item.id }}">{{ item.title }}</a>
            <div>
              <img src="{{item.author.avatar_url}}" alt="">{{item.author.loginname}}
            </div>
            <p>{{helper.relativeTime(item.create_at)}}</p>
        </div>
        <hr>
        {% endfor %}
    </div>
</body>

</html>