# WSGI std sandbox

## Some notes

### 1.
Change the PYTHONPATH env var for this to work properly
set it to PYTHONPATH = PYTHONPATH + PWD (current dir)

```shell
export PYTHONPATH=${PYTHONPATH}:$PWD
```

https://stackoverflow.com/questions/46565242/unable-to-run-flask-on-twisted-web-server-wsgi-application-error

once you do that you can run

```python
twistd web --wsgi app.application
```

## Helpful Sources

- https://www.youtube.com/watch?v=7kwnjoAJ2HQ