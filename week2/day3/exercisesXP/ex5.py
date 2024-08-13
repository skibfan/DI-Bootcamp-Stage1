# from datetime import date, time
from datetime import datetime


segodnya = datetime.now()
new_year = datetime(segodnya.year + 1, 1, 1)
# segodnya = segodnya.strftime("%Y-%m-%d %H:%M:%S")

countdown_days = (new_year - segodnya).days
countdown_hours, countdown_secs = divmod((new_year - segodnya).seconds, 3600)
countdown_mins, countdown_secs = divmod(countdown_secs, 60)

print(f"the 1st of January is in {countdown_days} days and {countdown_hours}:{countdown_mins}:{countdown_secs} hours")