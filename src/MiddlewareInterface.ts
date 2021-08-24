import ResponseInterface from '@chubbyjs/psr-http-message/dist/ResponseInterface';
import ServerRequestInterface from '@chubbyjs/psr-http-message/dist/ServerRequestInterface';
import RequestHandlerInterface from '@chubbyjs/psr-http-server-handler/dist/RequestHandlerInterface';

interface MiddlewareInterface {
    process(request: ServerRequestInterface, handler: RequestHandlerInterface): ResponseInterface;
}

export default MiddlewareInterface;
